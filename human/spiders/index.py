import scrapy
import re

class QuotesSpider(scrapy.Spider):
    name = "index"
    start_urls = [
        'https://www.tdcj.state.tx.us/death_row/dr_executed_offenders.html',
    ]
    
    def parse(self, response):
        try:
            yield {
            'text': re.sub("(\\u2018|\\u2019)", "'", response.css('p::text')[6].extract()),
            'name': re.sub("(\\u2018|\\u2019)", "'", response.css('p::text')[4].extract()),
            'date': re.sub("(\\u2018|\\u2019)", "'", response.css('p::text')[2].extract()),
            }
        except Exception as e:
            print e

        for page in response.css('td a').re(r'dr.*last\.html'):
            if page is not None:
                next_page = response.urljoin(page)
                yield scrapy.Request(next_page, callback=self.parse)