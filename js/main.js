//key:
//size(
//        1 = special-cover
//        2 = fifty-cover
//        3 = sixty-cover
//        4 = forty-cover
//    )
(function () {
    var app = angular.module('subjects', []);
    
    app.controller('display', function() {
        this.subject = people;
        this.shuffle = function(o) { 
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };
    });
    
    var people = [
      {
        "date": "October 5, 2016",
        "text": "I don't have anything to say, you can proceed Warden Jones.",
        "name": "Barney Ronald Fuller, Jr. #999481 "
      },
      {
        "date": "January 20, 2016",
        "text": "Sending me to a better place.  I am alright with  this, you have to live and die by the choices that we make.  I have made  mine.  I love you Renee, I am gonna carry your heart and always carry my  heart in your heart.  I am ready.",
        "name": "Richard Masterson #999414"
      },
      {
        "date": "January 27, 2016",
        "text": "None.",
        "name": "James Freeman  #999539"
      },
      {
        "date": "February 16, 2016",
        "text": "To my family, to my mom, I love you. God bless you, stay strong. I'm done. ",
        "name": "Gustavo Garcia #999018"
      },
      {
        "date": "May 12, 2015",
        "text": " I'm ready to go home. ",
        "name": "Charles, Derrick"
      },
      {
        "date": "October 14, 2015",
        "text": "Shelby, God bless your heart.  To my family, I  love them and everybody that showed support.  Thank you to all of my  cousins and aunts and uncles that showed support and that prayed for me.   From California to New York thank you for all of your support.  Pope  Francis, God’s children has asked the State of Texas to switch my death  sentence to life in prison.  But the State of Texas has refused to listen  to God’s children, they will have to take that up with God.  Let everyone  know it’s not over.  To Wesley Ruiz aka Slope, keep your head up, keep  your faith in God.  To my family I love y’all.  That’s it Warden.",
        "name": "Licho Escamilla #999432"
      },
      {
        "date": "October 6, 2015",
        "text": "(Spanish) To the Solano family, I want to tell them to  forgive me. While I am still alive I bring suffer to you all.  The harm  that I did to your dad and husband, I hope this brings you closure to all of  you.  I never wanted to hurt any of you all.  I received your card  and I want to thank you all.",
        "name": "Juan Garcia #999360"
      },
      {
        "date": "August 12, 2015",
        "text": "“I would like to thank you.  I hope this execution  helps my family and also the victim’s family.  This was never meant to be,  sure beyond my power. I can only walk the path before me and make the best of  it.  I am sorry for putting y’all through this.  I am sorry, I love  you.  I am ready.  May we all go to Heaven.  Thank you Warden Jones.”",
        "name": "Daniel Lopez  #999555"
      },
      {
        "date": "June 3, 2015",
        "text": "\"Much has been written about this case, not all of it has been the truth. But the time is over and now it is time to move on. I want to thank my attorneys for all that they have done. The have afforded me the last quarter of a century. I would like to thank my wife, my daughters, family and friends for unwavering support, and all of the letters and well wishes over the years. Now it is time to pass on. I have fought the good fight, I held the faith. I am not going to say goodbye, I will simply say until we meet again. I love you very, very much. Thank you Warden.\"",
        "name": "Lester Bower #000764"
      },
      {
        "date": "March 09, 2016",
        "text": "Yeah, first off, I want to say that I am sorry for the  pain that I have caused you people.  I am sorry that I cannot bring  everybody back.  I wish it could be different.  I know it would be  hard for you to understand what went on that night, I can’t bring them back as  much as I would like to.  I love my daughter and all of my  supporters.  I pray that the Lord take care of me and all of you.  I  have no bad sentiment towards anyone.  I can understand your outrage and  why you are mad at me.  God be with all of us.",
        "name": "Coy Wesbrook #999281"
      },
      {
        "date": "November 18, 2015",
        "text": "Yes, I would like to thank all of my supporters and  loved ones.  I love you, love y’all, always going to be with y’all.   Thank you Warden.",
        "name": "Raphael Holiday  #999419"
      },
      {
        "date": "April 06, 2016",
        "text": "I just want to tell my family thank you, my mom and  dad and sister and Sabrina. I love you Mercedes. I am sorry to David’s family.  This is only way that I can be forgiven. You got your justice right here.  That’s it. My trust in Jesus.",
        "name": "Pablo Vasquez #999297"
      },
      {
        "date": "March 22, 2016",
        "text": "I would like to thank everyone that has showed up on my  behalf, Kathryn Cox, I love you dearly.  Thank you Randy Cannon for  showing up and being a lifelong friend.  Thank you Dr. Steve Ball for  trying to bring the right out.  There are a lot of injustices that are  happening with this.  This is wrong.  Thank you Reverend Leon  Harrison for showing me the grace of God.  Thank you for all of my friends  that are out there.  This is not a capital case.  I never had  intended to do anything.  I feel very grieved for the loss of Walker, and  for Donovan and Marissa Walker.  I hope they can find peace and be  productive in society.  I would like to thank all of my friends on the row  even though everything didn’t work, close isn’t good enough.  I hope that  positive change will come out of this.",
        "name": "Adam Ward #999525"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": " January 29, 2009",
        "text": "I love my family. Thank you for all of your support. Stay strong. I am at peace. I love you and my kids. See you. ",
        "name": "Ortiz, Ricardo"
      },
      {
        "date": "December 7, 1982",
        "text": "Statement to the Media: I, at this very moment, have absolutely no fear of what may happen to this body.  My fear is for Allah, God only, who has at this moment the only power to determine if I should live or die... As a devout Muslim, I am taught and believe that this material life is only for the express purpose of preparing oneself for the real life that is to come... Since becoming Muslim, I have tried to live as Allah wanted me to live.",
        "name": "Charlie Brooks, Jr. #592"
      },
      {
        "date": "January 16, 1985",
        "text": "I pray that my family will rejoice and will forgive, thank you.",
        "name": "Doyle Skillern #518"
      },
      {
        "date": "March 13, 1985",
        "text": "Heavenly Father, I give thanks for this time, for the time that we have been together, the fellowship in your world, the Christian family presented to me (He called the names of the personal witnesses.). Allow your holy spirit to flow as I know your love as been showered upon me. Forgive them for they know not what they do, as I know that you have forgiven me, as I have forgiven them. Lord Jesus, I commit my soul to you, I praise you, and I thank you.",
        "name": "Stephen Peter Morin #712"
      },
      {
        "date": " May 25, 1985",
        "text": " There’s no God but Allah, and unto thy I belong and unto thy I return. I want to continue to tell my brothers and sisters to be strong.  ",
        "name": " Charles Milton #628  "
      },
      {
        "date": "March 30, 1984",
        "text": "What is about to transpire in a few moments is wrong! However, we as human beings do make mistakes and errors. This execution is one of those wrongs yet doesn’t mean our whole system of justice is wrong. Therefore, I would forgive all who have taken part in any way in my death. Also, to anyone I have offended in any way during my 39 years, I pray and ask your forgiveness, just as I forgive anyone who offended me in any way. And I pray and ask God’s forgiveness for all of us respectively as human beings. To my loved ones, I extend my undying love. To those close to me, know in your hearts I love you one and all. God bless you all and may God’s best blessings be always yours. Ronald C. O’Bryan P.S. During my time here, I have been treated well by all T.D.C. personnel. ",
        "name": "Ronald Clark O’Bryan #529"
      },
      {
        "date": "September 11, 1985",
        "text": "D.J., Laurie, Dr. Wheat, about all I can say is goodbye, and for all the rest of you, although you don’t forgive me for my transgressions, I forgive yours against me. I am ready to begin my journey and that’s all I have to say.",
        "name": "Charles Rumbaugh #555"
      },
      {
        "date": "April 12, 1986",
        "text": "I deserve this. Tell everyone I said goodbye.",
        "name": "Charles William Bass #662"
      },
      {
        "date": "June 9, 1986",
        "text": "Goodbye to all my friends; be cool. Thank you for being my friends. Give my love to everybody.",
        "name": "Rudy Ramos Esquivel #606"
      },
      {
        "date": "October 30, 1984",
        "text": " When asked if he had a last statement, he replied, \"Yes, I do.\"I hope that one day we can look back on the evil that we’re doing right now like the witches we burned at the stake. I want everybody to know that I hold nothing against them. I forgive them all. I hope everybody I’ve done anything to will forgive me. I’ve been praying all day for Carl Levin’s wife to drive the bitterness from her heart because that bitterness that’s in her heart will send her to Hell just as surely as any other sin. I’m sorry for everything I’ve ever done to anybody. I hope they’ll forgive me. \"Sharon, tell all my friends goodbye. You know who they are: Charles Bass, David Powell…\" Then he coughed and nothing else was said.  ",
        "name": " Thomas Barefoot #621"
      },
      {
        "date": "December 4, 1986",
        "text": "I want to say I’m sorry for the things I’ve done and I hope I’m forgiven. I don’t hold nothing against no one – Everyone has treated me well and I know it’s not easy for them – That’s all, I’m sorry.",
        "name": "Michael Wayne Evans #608"
      },
      {
        "date": "August 22, 1986",
        "text": "Tell my mother I love her and continue on without me. God bless her. Tell the guys on death row to continue their struggle to get off death row. That’s about it.",
        "name": "Larry Smith #643"
      },
      {
        "date": "May 15, 1986",
        "text": "\"Be strong for me,\" Pinkerton told his father, Gene Pinkerton, as witnesses entered the execution chamber. \"I want you to know I’m at peace with myself and with my God,\" Pinkerton said. He recited a prayer to Allah, the supreme being of Islam. \"I bear witness that there is no God but Allah. With your praise I ask for forgiveness and I return unto you,\" Pinkerton said. \"I love you, Dad.\"",
        "name": "Jay Kelly Pinkerton #686"
      },
      {
        "date": "May 28, 1987",
        "text": "Mother, I am sorry for all the pain I’ve caused you. Please forgive me. Take good care of yourself. Ernest and Otis, watch out for the family. Thank all of you who have helped me.",
        "name": "Anthony Williams #619"
      },
      {
        "date": "June 19, 1986",
        "text": "I have no last words. I am ready.",
        "name": "Kenneth A. Brock #522"
      },
      {
        "date": "March 22, 1989",
        "text": "I would like to tell Mr. Richard that I appreciate all he has done for me. I love you all. God bless. Goodbye, David.  ",
        "name": "Leon King #624"
      },
      {
        "date": "December 7, 1989",
        "text": "I want to say I hold no grudges. I hate no one. I love my family. Tell everyone on death row to keep the faith and don’t give up.",
        "name": "Carlos DeLuna #744"
      },
      {
        "date": "September 20, 1989",
        "text": "I hope Mrs. Howard can find peace in this.",
        "name": "James Emery Paster #752"
      },
      {
        "date": "August 20, 1986",
        "text": "Goodbye to my family; I love all of you, I’m sorry for the victim’s family. I wish I could make it up to them. I want those out there to keep fighting the death penalty.",
        "name": "Randy L. Woolls #646"
      },
      {
        "date": "May 17, 1990",
        "text": "I would like to point out that I have written a statement and the Warden will give you a copy. I still proclaim I am innocent, and that’s all I have to say.",
        "name": "Johnny Anderson #732"
      },
      {
        "date": "February 26, 1991",
        "text": "I’m ready, Warden.",
        "name": "Lawrence Lee Buxton #743"
      },
      {
        "date": "April 21, 1990",
        "text": "I wish everybody a good life. Everything is O.K.",
        "name": "Jerome Butler #852"
      },
      {
        "date": "May 23, 1991",
        "text": "I’m going to a beautiful place. O.K., Warden, roll ‘em.",
        "name": "Ignacio Cuevas #526"
      },
      {
        "date": "June 17, 1991",
        "text": "I don’t think so. That’s all. Go ahead. Start things rolling. ",
        "name": "Jerry Bird #512"
      },
      {
        "date": "July 18, 1990",
        "text": "I just ask everybody I ever hurt or done anything wrong to, to just forgive me for whatever wrongs I done to them.",
        "name": "Mikel James Derrick #701"
      },
      {
        "date": "November 12, 1991",
        "text": "Let’s do it, man. Lock and load. Ain’t life a ",
        "name": "G.W. Green #576"
      },
      {
        "date": "February 28, 1992",
        "text": "None. But as he lay there he did praise the Lord and seemed to be praying.",
        "name": "David Clark #874"
      },
      {
        "date": "March 3, 1992",
        "text": "I just want everyone to know that the prosecutor and Bill Scott are sorry sons of bitches. ",
        "name": "Edward Ellis #749"
      },
      {
        "date": "May 20, 1992",
        "text": "When his attorney came into the witness room, he said, \"Tell Mom I love her.\" The attorney said back to him, \"I love you, too.\"",
        "name": "Jesus Romero, Jr. #801"
      },
      {
        "date": "May 12, 1993",
        "text": "I am innocent, innocent, innocent. Make no mistake about this; I owe society nothing. Continue the struggle for human rights, helping those who are innocent, especially Mr. Graham. I am an innocent man, and something very wrong is taking place tonight. May God bless you all. I am ready.  ",
        "name": "Leonel Torres Herrera #702"
      },
      {
        "date": "June 29, 1993",
        "text": "I am the sinner of all sinners.  I was responsible for the ’75 and ’79 cases. My trial was not just; it was not fair; they lied against me. I love all of those on Death Row, and I will always hold them in my hands. Those who stood by me, I will always love you. Jim and Judy Peterson and Chaplain Lopez, I thank you for staying by my side.",
        "name": "Markum Duff-Smith #694"
      },
      {
        "date": "September 19, 1991",
        "text": "His final statement lasted 3 minutes. He thanked everybody that fought against his sentence. He spoke to his family and said he would carry their love with him.  ",
        "name": "James Russell #579"
      },
      {
        "date": "July 30, 1993",
        "text": "I would like to tell my family I love them very dearly, and I know they love me. I love all of the people who supported me all of these years. I would like to tell the Merka family I love them, too. I plead with all the teenagers to stop the violence and to accept Jesus Christ and find victory. Today I have victory in Christ and I thank Jesus for taking my spirit into His precious hands. Thank you, Jesus.  ",
        "name": "Danny Ray Harris #649"
      },
      {
        "date": "May 7, 1992",
        "text": "Thanked his family.",
        "name": "Justin Lee May #783"
      },
      {
        "date": "May 22, 1992",
        "text": "High Flight (aviation poem)",
        "name": "Black, Robert #819"
      },
      {
        "date": "August 20, 1993",
        "text": "I’m an African warrior, born to breathe, and born to die.",
        "name": "Carl Kelly #688"
      },
      {
        "date": "July 9, 1985",
        "text": "I want to thank Father Walsh for his spiritual help. I want to thank Bob Ray (Sanders) and Steve Blow for their friendship. What I want people to know is that they call me a cold-blooded killer when I shot a man that shot me first. The only thing that convicted me was that I am a Mexican and that he was a police officer. People hollered for my life, and they are to have my life tonight. The people never hollered for the life of the policeman that killed a thirteen-year-old boy who was handcuffed in the back seat of a police car. The people never hollered for the life of a Houston police officer who beat up and drowned Jose Campo Torres and threw his body in the river. You call that equal justice. This is your equal justice. This is America’s equal justice. A Mexican’s life is worth nothing. When a policeman kills someone he gets a suspended sentence or probation. When a Mexican kills a police officer this is what you get. From there you call me a cold-blooded murderer. I didn’t tie anyone to a stretcher. I didn’t pump any poison into anybody’s veins from behind a locked door. You call this justice. I call this and your society a bunch of cold-blooded murderers. I don’t say this with any bitterness or anger. I just say this with truthfulness. I hope God forgives me for all my sins. I hope that God will be as merciful to society as he has been to me. I’m ready, Warden.  ",
        "name": "Henry Porter #551"
      },
      {
        "date": "August 31, 1993",
        "text": "This execution is not justice. This execution is an act of revenge! If this is justice, then justice is blind. Take a borderline retarded young male who for the 1st time ever in his life committed a felony then contaminate his TRUE tell all confession add a judge who discriminates plus an ALL-WHITE JURY pile on an ineffective assistance of counsel and execute the option of rehabilitation persecute the witnesses and you have created a death sentence for a family lasting over 10 years.",
        "name": "Richard J. Wilkerson #756"
      },
      {
        "date": "November 10, 1993",
        "text": "I just want to tell my family I love them, and I thank the Lord Jesus for giving me another chance and for saving me.",
        "name": "Anthony Cook #918"
      },
      {
        "date": "February 2, 1994",
        "text": "God, please forgive me of my sins. Look after my people. Bless and protect all people. I am sorry for my sins. Lord, take me home with you. Amen. ",
        "name": "Harold Barnard #683"
      },
      {
        "date": "June 14, 1994",
        "text": "To my family who has kept me strong, I give my love.",
        "name": "Denton Crank #803"
      },
      {
        "date": "September 16, 1994",
        "text": "I just love everybody, and that’s it.",
        "name": "Jessie Gutierrez #971"
      },
      {
        "date": "March 31, 1994",
        "text": "Peace.",
        "name": "Freddie Webb #848"
      },
      {
        "date": "November 22, 1994",
        "text": "I'll see you.",
        "name": "Bridge, Warren #668"
      },
      {
        "date": "12/06/1994",
        "text": "I told the daughter not to come. Discontinue; be quiet, please. Specifically, I want to say that the bad evil man I was when I came to death row 13 years ago is no more – by the power of God; Jesus Christ; God Almighty; Holy Spirit, he has transformed me as a new creature of Christ. I know that I am a Christ child and that my Lord will welcome me into His arms.",
        "name": "Herman Clark #715"
      },
      {
        "date": "December 11, 1994",
        "text": "…guys like them got tied up in something like this. Thank Chaplain Taylor and Jane. I just got your letter. Thanks to Carolyn and Gloria, who have been my friends for over four years. I want to remember Patsy Buntion, Gladys and a lot more friends. I want to thank the prosecutor in my case; it took courage for him to do what he did but he did what he did because he believed in the judicial system.",
        "name": "Raymond Kinnamon #808"
      },
      {
        "date": "December 15, 1993",
        "text": "I want to express my feelings regarding the mishap of the deceased Mrs. Iris Siff. That was a very unfortunate incident and only God knows why it was an unintentional situation that took place. I want to express my remorse to the family and the discomfort and pain I caused in their lives. Only God will determine if I am truly guilty or innocent of being the type of person I have been drawn up to be by the press and media. I have given my wife the power and energy to be a disciple of Islam. I rescued her from a wretched life in Ireland. I thank Allah for sending her to me. Certainly murder cannot be an instrument of Allah. My wife is very devoted.",
        "name": "Clifford Phillips #723"
      },
      {
        "date": "January 4, 1995",
        "text": "I have committed lots of sin in my life, but I am not guilty of this crime.",
        "name": "Jesse Jacobs #872"
      },
      {
        "date": "January 17, 1995",
        "text": "Thank you for being my Lord Jesus and Savior and I am ready to come home. Amen.  ",
        "name": "Mario Marquez #776"
      },
      {
        "date": "January 31, 1995",
        "text": "I would like to thank my friends and family for sticking with me through all of this. I would like to encourage my brothers to continue to run the race. I thank my Father, God in Heaven, for the grace he has granted me –  I am ready.",
        "name": "Clifton Russell #658"
      },
      {
        "date": "August 2, 1994",
        "text": " I don’t know why Marta Glass wasn’t allowed in here. I love you all. Keep the faith. Remember the death penalty is murder. They are taking the life of an innocent man. My attorney, Ron Kuley [unintelligible], will read my letter at a press conference after this is over. That is all I have to say. I love you all.",
        "name": "Robert Nelson Drew #755"
      },
      {
        "date": "January 31, 1995",
        "text": "There’s love and peace in Islam.",
        "name": "Willie Williams #677"
      },
      {
        "date": "February 7, 1995",
        "text": "I love you, Mom. Goodbye.",
        "name": "Jeffery Motley #789"
      },
      {
        "date": "June 1, 1995",
        "text": "I would like to tell my family I love them. My attorneys did their best. All of my brothers on death row, those who died and those who are still there, to hang in there. And that's all I have to say.",
        "name": "Fletcher Thomas Mann #705"
      },
      {
        "date": "June 20, 1995",
        "text": "I would like to say that I have no animosity toward anyone. I made a mistake 18 years ago – I lost control of my mind but I didn’t mean to hurt anyone. I have no hate toward humanity. I hope He will forgive me for what I done. I didn’t mean to.",
        "name": "John Fearance #626"
      },
      {
        "date": "February 16, 1995",
        "text": "I forgive all of you – hope God forgives all of you too.",
        "name": "Billy C. Gardner #751"
      },
      {
        "date": "August 15, 1995",
        "text": "I would like to say – I just hope Ms. Fielder is happy now. I would like to thank my lawyer, Nancy, for her help on my case and for being with me now.",
        "name": "Vernon Sattiewhite #857"
      },
      {
        "date": "May 27, 1994",
        "text": "Well, I just wanted to ask people to pray for two families: my family and the family of Officer McCarthy. I appreciate the prayers. Lord Jesus, receive my spirit.",
        "name": "Stephen Ray Nethery #698"
      },
      {
        "date": "December 7, 1995",
        "text": "I thank God that he died for my sins on the cross, and I thank Him for saving my soul, so I will know when my body lays back in the grave, my soul goes to be with the Lord. Praise God. I hope whoever hears my voice tonight will turn to the Lord. I give my spirit back to Him. Praise the Lord. Praise Jesus. Hallelujah.",
        "name": "Hai Vuong #904"
      },
      {
        "date": "September 18, 1996",
        "text": "There are people all over the world who face things worse than death on a daily basis, and in that sense I consider myself lucky.",
        "name": "Joe F. Gonzales, Jr. #999177"
      },
      {
        "date": "February 10, 1997",
        "text": "Last Statement:",
        "name": "Richard Brimage, Jr. "
      },
      {
        "date": "September 19, 1995",
        "text": "I want the world to know that I’m innocent and that I’ve found peace. Let’s ride.  ",
        "name": "Carl Johnson #633"
      },
      {
        "date": "March 12, 1997",
        "text": " Tell Mama I love her.",
        "name": "John K. Barefield #844"
      },
      {
        "date": "April 2, 1997",
        "text": "It was horrible and inexcusable for me to take the life of your loved one and to hurt so many mentally and physically. I am here because I took a life and killing is wrong by an individual and by the state, and I am sorry we are here but if my death gives you peace and closure then this is all worthwhile. To all of my friends and family, I love you and I am going home -  ",
        "name": "David Herman #999003"
      },
      {
        "date": "April 3, 1997",
        "text": "Yes, I do. First of all, I want you to understand I speak the truth when I say I didn’t kill your kids. Honestly I have not killed anyone. I wish you could get the rage from your hearts and you could see the truth and get rid of the hatred.",
        "name": "David Spence #773"
      },
      {
        "date": "May 13, 1997",
        "text": "I want you to know that I did not kill anyone. I love you all. ",
        "name": "Anthony Westley #797"
      },
      {
        "date": "May 20, 1997",
        "text": "I would like to thank my Lord Jesus Christ for keeping me strong all these years. I would also like to thank my mother for standing by me all these years. I would also like to thank my pen pals, Joe and Camille Tilling and JoAnn for helping me stay strong all these years. I also thank my two lawyers, Rita and Brent, for fighting to keep me alive. I love you, Mom -",
        "name": "Clarence Lackey #591"
      },
      {
        "date": "May 16, 1997",
        "text": "First of all I want to thank the LORD, my family and my wife Nora for all the support and encouragement they’ve shown me through all this. I love you!! Now I want to thank all of you that came here today to be with me. I know most of you are here to see me suffer and die but you’re in for a big disappointment because today is a day of joy. Today is the day I’ll be set free from all this pain and suffering. Today I’m going home to HEAVEN to live for all eternity with my HEAVENLY FATHER JESUS CHRIST, and as I lay here taking my last breath, I’ll be praying for all of you because you’re here today with anger and hatred in your hearts letting Satan deceive you into believing that what you’re doing is right and just. GOD help you, because what you’re doing here today and what’s in your hearts here today makes you no better than any man or woman on death-rows across this country. Today you’re committing murder too!!! I pray on my own behalf for forgiveness for any and all of the pain I’ve caused you, I pray that some day you’ll realize your own mistakes and ask GOD to forgive you as I have, because there is no peace without GOD’s forgiveness. ",
        "name": "Clifton E. Belyeu #841"
      },
      {
        "date": "May 22, 1997",
        "text": "I would like to apologize for all of the hurt, pain and disappointment I caused to my family and all my friends.  I hope all the veterans and teenagers out there who have a drug problem will get help.  I hope the lord will forgive me of all of my sins.  I thank Jack and Kathy for being with me.  I hope that those who support the Death Row inmates will continue to work and maybe we can get this resolved and do away with the Death Penalty.  I hope this is a lot better place where I am going.",
        "name": "Larry White #640"
      },
      {
        "date": "May 28, 1997",
        "text": "Yes sir, I do. Well, here we are. I apologize for your loss and your pain, but I didn’t kill those people.",
        "name": "Robert Madden #822"
      },
      {
        "date": "May 21, 1997",
        "text": "I want to let all of my people know and everybody who is here and supported me that I love them and wish them all the best.",
        "name": "Bruce Callins #717"
      },
      {
        "date": "April 16, 1997",
        "text": "Thank the Lord for the past 14 years that have allowed me to grow as a man –",
        "name": "Kenneth Gentry #760"
      },
      {
        "date": "June 3, 1997",
        "text": "I would like to thank all of you for coming. I am sorry for all of the pain I have caused both families – my family and yours.",
        "name": "Kenneth B. Harris #901"
      },
      {
        "date": "June 4, 1997",
        "text": "Yes, I do.",
        "name": "Losada Davis #798"
      },
      {
        "date": "June 4, 1997",
        "text": "I would like to tell my family that I love them and always be strong and keep their heads up and keep faith in Jesus.",
        "name": "Dorsie Lee Johnson, Jr. #850"
      },
      {
        "date": "June 2, 1997",
        "text": "Yes, I would like to praise Allah and I am praying to Allah. Allah is most gracious. I will ask Allah for forgiveness because he created me and he will forgive me.",
        "name": "Patrick Rogers #816"
      },
      {
        "date": "June 11, 1997",
        "text": "It’s a good day to die. I walked in here like a man and I am leaving here like a man. I had a good life. I have known the love of a good woman, my wife. I have a good family. My grandmother is the pillar of the community. I love and cherish my friends and family. Thank you for your love.",
        "name": "Earl Behringer #914"
      },
      {
        "date": "June 16, 1997",
        "text": "I have a statement prepared that I have given to the Chaplain that I want released to the media.",
        "name": "David Stoker #892"
      },
      {
        "date": "June 17, 1997",
        "text": "I would like to say to the Magee family and the Cadena family that I was friends with David and Virginia and I did not commit this offense.",
        "name": "Eddie Johnson #898"
      },
      {
        "date": "September 9, 1997",
        "text": "Well, my friends in my heart, I’m ready –",
        "name": "James Carl Lee Davis #786"
      },
      {
        "date": "July 29, 1997",
        "text": "I would like to apologize for all of the pain and suffering I put you all through. I hope this will give you closure now and later on down the line.",
        "name": "Robert West #731"
      },
      {
        "date": "September 30, 1997",
        "text": "I would like to apologize to the victim’s family for all of the pain I have caused them. I would like to tell my family I love them and I hope to see them again soon. Lord Jesus, thank you for giving me the strength and the time in my life to find Jesus Christ and to be forgiven for all of my sins. Thank you for the changes in my life you have given me, the love and closeness of my family, and my beautiful daughter. Thank you for using me -",
        "name": "John William Cockrum #854"
      },
      {
        "date": "October 8, 1997",
        "text": "Ms. Craft and Ms. Bethrie, I don’t know what to say to you   but I apologize for the pain I have caused you and your family over the years. I   hope that you will accept my apology and that you will know that it is sincere.   I hope this will allow you and your family to move on and I hope you will   forgive me and I hope Mr. Hanon [illegible] will forgive me for taking   his life. Please accept my apology. I love you all.",
        "name": "Dwight Adanandus #940"
      },
      {
        "date": "October 8, 1997",
        "text": "I want to thank the Lord for giving me this opportunity to get to know Him. He has shown me a lot and He has changed me in the past two months. ",
        "name": "Ricky Lee Green #984"
      },
      {
        "date": "June 18, 1997",
        "text": "Goodbye.",
        "name": "Irineo Montoya #847"
      },
      {
        "date": "October 28, 1997",
        "text": "First and foremost I would like to tell the victims’ families that I am sorry because I don’t feel like I am guilty. I am sorry for the pain all of them have gone through during holidays and birthdays. They are without their loved ones.",
        "name": "Kenneth Ransom #772"
      },
      {
        "date": "November 4, 1997",
        "text": "I am so glad I found God and I am so happy for it.",
        "name": "Aua Lauti #843"
      },
      {
        "date": "November 6, 1997",
        "text": "Jesus, the Lord, is everything to me. I am nothing without him. Praise Jesus. Praise God",
        "name": "Aaron Lee Fuller #964"
      },
      {
        "date": "November 19, 1997",
        "text": "Yes, I do. I would like to tell the surviving victims here, society, my family and friends, that I ask that they forgive me for anything I have done. I beg for your forgiveness. I would like to ask the Lord Jesus Christ for forgiveness and say that in spite of my circumstances, I have been blessed by Him. My first thought is that Jesus Christ came down and separated the humans from God. I would like to see that wall that separates these groups here tonight brought down and that we would all have love and compassion for one another and that you all build a future for all of us. There are a lot of men on the Row who need to be remembered. I love all…",
        "name": "Michael Eugene Sharp #740"
      },
      {
        "date": "November 21, 1997",
        "text": "You all brought me here to be executed, not to make a speech. That’s it.  ",
        "name": "Charlie Livingston #802"
      },
      {
        "date": "09/25/1997",
        "text": "This offender declined to make a last statement.",
        "name": "Benjamin Stone #999187"
      },
      {
        "date": "February 3, 1998",
        "text": "Yes sir, I would like to say to all of you – the Thornton family and Jerry Dean’s family that I am so sorry. I hope God will give you peace with this.",
        "name": "Karla Faye Tucker #777"
      },
      {
        "date": "February 9, 1998",
        "text": "I would like to tell the victims’ families that I am sorry, very sorry.",
        "name": "Steven Ceon Renfro #999229"
      },
      {
        "date": "March 11, 1998",
        "text": "Mindy, I’m with you, honey. I do not know why, Mindy, you are doing this, but I will still forgive you. You know he is a murderer. Why don’t you support me? He will do it again. Mindy, you are lucky you are still alive.",
        "name": "Jerry Lee Hogue #660"
      },
      {
        "date": "December 9, 1997",
        "text": "A lot of people view what is happening here as evil, but I want you to know that I found love and compassion here. The people who work here, I thank them for the kindness they have shown me and I deeply appreciate all that has been done for me by the people who work here. That’s all, Warden, I’m ready.  ",
        "name": "Michael Lee Lockhart #917"
      },
      {
        "date": "April 22, 1998",
        "text": "I am sorry for what I did to your mom. It isn’t because I’m going to die. All my life I have been locked up. I could never forgive what I done. I am sorry for all of you. I love you all. Thank you for supporting me. I thank you for being kind to me when I was small. Thank you, God.",
        "name": "Joseph John Cannon #634"
      },
      {
        "date": "May 18, 1998",
        "text": "I love all of you all. Thank you for caring so much about me. Keep the faith. I am going to a better place. I hope the victim’s family will forgive me because I didn’t mean to hurt no one or kill no one.",
        "name": "Robert Carter #708"
      },
      {
        "date": "April 19, 1998",
        "text": "I owe no apologies for a crime I did not commit. Those who lied and fabricated evidence against me will have to answer for what they have done. I know in my heart what I did and I call upon the spirit of my ancestors and all of my people and I swear to them and now I am coming home.  ",
        "name": "Frank Basil McFarland #963"
      },
      {
        "date": "September 22, 1997",
        "text": "First, I would like to give praise to God for the love and grace that he has allowed for all of this to come together.",
        "name": "Jessel Turner #895"
      },
      {
        "date": "June 11, 1998",
        "text": "I’d like to say that for the murders of Ray Hazelwood and Frank Collier, I’m sorry for that pain it has caused you. To my friends, I’d like to say that I love you and I’m glad you’ve been a part of my life. Thank you. I’ll miss you. Remember that today I’ll be with Jesus in paradise. I’ll see you again.",
        "name": "Clifford Boggess #887"
      },
      {
        "date": "June 15, 1998",
        "text": "I want to tell you folks there, of a… I have a love in my heart for you. I hope you don’t look for satisfaction or comfort or peace in my execution. Jesus Christ is my Lord and Savior and I want him to be yours. I’m sorry for the pain and heartache I’ve caused your family. Too many years I’ve caused all my family problems and heartache. I’m sorry. I wanted to let you know that the Lord Jesus is my life and I just want to go. I’m gonna fall asleep and I’ll be in his presence shortly. I got reason to rejoice and I pray to see all of you there someday.  ",
        "name": "Johnny Dean Pyles #724"
      },
      {
        "date": "August 26, 1998",
        "text": "I love you all. We had a good service and I’ll be with you. I’ll be waiting for you in Heaven. Ok. Adios. That’s all I have to say.",
        "name": "Genaro Camacho, Jr. #972"
      },
      {
        "date": "May 19, 1998",
        "text": "I know you can’t hear me now but I know that it won’t matter what I have to say.",
        "name": "Pedro Muniz #575"
      },
      {
        "date": "September 23, 1998",
        "text": "Keep it brief here. Just want to say, uh, family, take care of yourselves. Uh, look at this as a learning experience. Everything happens for a reason. We all know what really happened, but there are some things you just can’t fight. Little people always seem to get squashed. It happens. Even so, just got to take the good with the bad. There is no man that is free from all evil, nor any man that is so evil to be worth nothing. But it’s all part of life, and my family, take care of yourselves. Tell my wife I love her. I’ll keep an eye on everybody, especially my nieces and nephews. I’m pretty good. I love ya’ll. Take care. I’m ready.",
        "name": "David Castillo #770"
      },
      {
        "date": "September 9, 1998",
        "text": "I have come here today to die, not make speeches. Today is a good day for dying.",
        "name": "Delbert Teague, Jr."
      },
      {
        "date": "October 1, 1998",
        "text": "Thank you for setting me free. God bless you all. I love you, Miguel. Take care of my angel, Leslie. Love, Javier Cruz",
        "name": "Javier Cruz #999061"
      },
      {
        "date": "November 17, 1998",
        "text": "I’m ready to be released. Release me.  ",
        "name": "Kenneth Allen McDuff #999055"
      },
      {
        "date": "December 8, 1998",
        "text": "I just want to tell Catharina I love you. Take care of yourself. That’s all I have to say.",
        "name": "Jeff Emery #830"
      },
      {
        "date": "December 7, 1998",
        "text": "I guess the first thing I want to do is thank some very special people, Sara and Sabrina. And for affording me the opportunity that ya’ll did. It made a real big difference in my life. I thank you. Thank you again from the deepest part of my heart. I’m sorry. The biggest thing I wanted to say was to you and family and I know I haven’t had a chance to talk with ya’ll in any form or fashion or way or manner. And I regret what happened and I want you to know that I’m sorry. I just ask and hope that sometime down the line that you can forgive me. I think in a lot of ways that without that it becomes very empty and hollow and the only thing we have is hatred and anger. I guess the only thing I have to say about the Death Penalty is that a lot of times people think of it as one sided, but it’s not. It’s two sided. There pain on both sides and it’s not an issue that people just sit there and voice off and say, well, this is a good thing, or this is a bad thing. But it’s something that’s, you know, needs to be looked at and desired in each heart. I just hope that all of you can understand that and someday forgive me. I want to thank ya’ll for affording me the opportunity to talk and meet with ya’ll. It meant so much. Thank you so much for being with me and my family. Thank you. I love you.",
        "name": "Daniel Lee Corwin #969"
      },
      {
        "date": "January 5, 1999",
        "text": "I’d like to apologize and ask forgiveness for any pain and suffering I have inflicted upon all of you, including my family. All of you, I am very sorry. There is a point where a man wants to die in judgment. Though my judgment is merciful, I hope and pray that all those involved as well as the judgment upon ya’ll, will one day be more merciful than mine. God bless you all. God speed. I love you. Remain strong. Ask God to have mercy. I love you all, too. I’m very sorry. I’ve got to go now. I love you.  ",
        "name": "John Glenn Moody #933"
      },
      {
        "date": "January 13, 1999",
        "text": "First off, to the Rosenbaum family, to Cindy, to Scott, to everyone, I just want to say I have nothing but love for you. And I mean that from the deepest part.",
        "name": "Troy Dale Farris #831"
      },
      {
        "date": "January 26, 1999",
        "text": "I really don’t have much to say. All I want to say is that when the state introduced my sister and my niece as state witnesses, it’s not that they testified against me. The thing is, my lawyers would not subpoena anyone, so they allowed the state to subpoena them to paint a picture to the jury that my own sister and niece was testifying against me.",
        "name": "Martin Sauceda Vega #932"
      },
      {
        "date": "October 7, 1998",
        "text": "1 Corinthians 12:31B – 13:13 (NIV)",
        "name": "Jonathan Nobles #885"
      },
      {
        "date": "February 10, 1999",
        "text": "For the pain I have caused you. I am ashamed to even look at your faces. You are great people. To my brothers on Death Row. Mexico, Mexico…",
        "name": "George Cardova #706"
      },
      {
        "date": "February 11, 1999",
        "text": "Hello, Ms. Ingram, it is good to see you. I said I could talk but I don’t think I am gonna be able to. I heard one of your nieces had some angry words. I didn’t have anything to do with the stay. I spent the last twenty years waiting to figure out what’s going on. I pray that you get over it and that’s the only thing I can think to say. I’m regretful for what I done, but I’m a different person from that time. If you could get to know me over the years, you could have seen it. I’ve got some people over here that believes that.",
        "name": "Danny Lee Barber #673"
      },
      {
        "date": "March 26, 1999",
        "text": "The first statement I would like to make it’s my sister. I want her to know that every thing that is said, every move that is made, every motion, I hold it true to my heart. I hold it in my soul.",
        "name": "Charles Rector #721"
      },
      {
        "date": "April 28, 1999",
        "text": "Adios, amigos, I’ll see ya’ll on the other side. I’m ready when ya’ll are.",
        "name": "Aaron Christopher Foust #999268"
      },
      {
        "date": "December 15, 1998",
        "text": "As the ocean always returns to itself, love always returns to itself. So does consciousness, always returns to itself. And I do so with love on my lips. May God bless all mankind.",
        "name": "James Ronald Meanes #689"
      },
      {
        "date": "July 1, 1999",
        "text": "To Kathy’s family and friends that were unable to attend today, I am truly sorry. I hope my dropping my appeal has in some way began your healing process. This is all I am going to do to help you out in any way for the nightmare and pain that I have caused you, but I am truly sorry and I wish I could take back what I did, but I can’t. I hope this heals you.",
        "name": "Charles Daniel Tuttle #999183"
      },
      {
        "date": "September 4, 1999",
        "text": " I would like to give thanks to God Almighty, by whose grace I am saved through His son, Jesus Christ, without whom I would be nothing today. Because of this mercy and grace, I have come a long way, and I would like to thank God and others who have been instrumental. I would like to say to the Lang family how truly sorry I am in my soul and in my heart of hearts for the pain and misery that I have caused from my actions. I am truly sorry. And to my family I would also like to extend to them the same apology for the pain and misery that I have put them through, and I love them dearly from the bottom of my heart, and one day I would like to see them on the other side. Some I will; some I won’t. I would like to thank all of the men on Death Row who have showed me love throughout the years, but especially the last two or three weeks, and I hold nothing against no man. I am so thankful that I have lived as long as I have. I hope that I have helped someone. I hope that [by] donating my body to science that some parts of it can be used to help someone, and I just thank the Lord for all that he has done for me. That is all I have to say, Warden.  Oh, I would like to say in closing, \"What about those cowboys?\"  ",
        "name": " William Prince Davis #614  "
      },
      {
        "date": "September 10, 1999",
        "text": " Yes, I would like to give love to my mother, sisters and brothers and let them know that I am thinking of them right now and I want to thank God for giving me such a loving family. To the victim’s family: I hope you will find it in your heart to forgive me as I have forgiven you. I’m ready, Warden.  ",
        "name": "Willis Jay Barnes #935  "
      },
      {
        "date": "November 17, 1999",
        "text": " I'm sorry, I wish I could bring them back. I'm done, let's do it.  ",
        "name": "John Lamb #734"
      },
      {
        "date": "October 28, 1999  ",
        "text": "English: I love you. I will be waiting for you on the other side. Son be strong no matter what happens, know that God is looking over you. Jesus mercy, Jesus mercy, Jesus mercy! Spanish: Brother-in-law, take care of the family and let it be united. Yoli. German: Menic schone prizessin. Du list all mine herz and seele, rind ich liele dich so sehm! (Translation: My beautiful princess. You are all my heart and soul and I love you so much.  ",
        "name": " Cantu, Domingo #924  "
      },
      {
        "date": " November 18, 1999",
        "text": " Mama Isabel told me to tell you hello. Holy, holy, holy! Lord God Almighty! Early in the morning our song shall rise to Thee; Holy, holy, holy, merciful and mighty! God in three Persons, blessed Trinity. Holy, holy, holy! Merciful and mighty. All Thy works shall praise Thy name, in earth, and sky, and sea; Holy, holy, holy, merciful and mighty! God in three Persons, blessed Trinity. Oh, our Father who art in heaven, holy, holy, holy be Thy name. Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our sin as we forgive our debtors. Lead us not into temptation, but deliver us from evil, for Thine is the kingdom and the power and the glory forever and ever. Now, Father, into Thy hands I commit my spirit. Amen.  ",
        "name": "Jose Gutierrez #970"
      },
      {
        "date": " December 8, 1999",
        "text": " Ah, just ah sorry ya'll. I think of tried everything I could to get in touch with ya'll to express how sorry I am. I, I never was right after that incident happened. I sent a letter to somebody, you know a letter outlining what I feel about everything. But anyway I just wanted, right after that apologize to you. I'm real sorry for it. I was raised by the California Youth Authority, I can't really pin point where it started, what happened but really believe that's just the bottom line, what happened to me was in California. I was in their reformatory schools and penitentiary, but ah they create monsters in there. That's it, I have nothing else to say. Thanks for coming Jack.  ",
        "name": " David Long #862"
      },
      {
        "date": "July 7, 1999",
        "text": "Yes, to my family, I love you. Please do not mourn my death or my life. Continue to live as I want you to live. I hold no bitterness toward no one. Just remember the light. I’m gonna let this light shine. Let it shine. Let the light shine.",
        "name": "Tyrone Leroy Fuller #934"
      },
      {
        "date": "December 9, 1999",
        "text": " I want to start out by acknowledging the love that I've had in my family. No man in this world has had a better family than me. I had the best parents in the world. I had the best brothers and sisters in the world. I've had the most wonderful life any man could have ever had. I've never been more proud of anybody than I have of my daughter and my son. I've got no complaints and no regrets about that. I love everyone of them and have always been loved all of my life. I've never had any doubts about that. Couple of matters that I want to talk about since this is one of the few times people will listen to what I have to say. The Unites States has gotten to a now where they zero respect for human life. My death is just a symptom of a bigger illness. At some point the government has got to wake up and stop doing things to destroy other countries and killing innocent children. The ongoing embargo and sanctions against places like Iran and Iraq, Cuba and other places. They are not doing anything to change the world, but they are harming innocent children. That's got to stop at some point. Perhaps more important in a lot of ways is what we are doing to the environment is even more devastating because as long as we keep going the direction we're going the end result is it won't matter how we treat other people because everybody on the planet will be on their way out. We have got to wake up and stop doing that. Ah, one of the few ways in the world the truth is ever going to get out, or people are ever going to know what's happening as long as we support a free press out there. I see the press struggling to stay existent as a free institution One of the few truly free institutions is the press in Texas. People like the Texas Observer and I want to thank them for the job they've done in keeping me and everybody else informed. I hope people out there will support them, listen to them and be there for them. Without it, things like this are going to happen and nobody will even know. I love all of you. I always have I always will. I would like to address the State of Texas and specially Joe Price, the District Attorney who put me here. I want to remind Mr. Price of the mistake he made at Gene Hawthorn's trial when he said that Gene Hawthorn was telling the truth at my trial. Mr. Price is a one-eyed hunting dog. He in fact is not a one-eyed hunting dog, and in fact Gene Hawthorn lied at my trial. Everybody knew it. I'm dying tonight based on testimony, that all parties, me, the man who gave the testimony, the prosecutor he used knew it was a lie. I am hoping somebody will call him to the floor for recent comments he's made in the newspaper. It's bad enough that a prosecutor can take truth and spin on it and try to re-doctor it. But when they actually make facts up and present to the public as trial's evidence. That goes beyond fail, that's completely unforgivable and I hope somebody makes Mr. Price account for or explain the tennis shoes he is talking about that put me here. I'm still completely lost on that and I'm hoping that somebody will go back and verify the trial record and make him accountable for lying to the public and the press that way. That's really all I have to say except that I love my family. and nobody, nobody has got a better family than me. I love you booger bear. I love doodle bug, too. Don't let them ever forget me. I'll never forget them. I'll see you on the other side, okay. Bye bye Debbie. Bye bro, bye booger bear. Father Mike, Father Walsh, love you all. That's all, sir.  ",
        "name": "Beathard, James #785"
      },
      {
        "date": "August 5, 1999",
        "text": "I want you all to know I did not do this crime. I wanted to wait for a thirty day stay for a DNA test so you know who did the crime.",
        "name": "Charles Boyd #891"
      },
      {
        "date": "December 14, 1999",
        "text": "Well, first, My people, you guys have heard everything I needed to say today. I hope I said the right things. I hope you heard me. And I hope you go beyond here and do what you need to do, do the right thing. Strength in numbers. Look out for each other. You still got a chance with Shawn. Edwin you know what you gotta do. You have my love. It's the right thing. And for everybody else, those people who have malice in their heart, allow ambitions to over ride what they know. Be right. Even though they just gotta do their job. For all of you with hatred in their veins, and think this is ashamed. You've done nothing. I did this, I chose this, you've done nothing. Remember this, if all you know is hatred, if all you know is blood love, you'll never be satisfied. For everybody out there that is like that and knows nothing but negative, kiss my proud white Irish ass. I'm ready Warden, send me home.  ",
        "name": "Atworth, Robert #999199"
      },
      {
        "date": " December 15, 1999",
        "text": " Like to tell my friends that I love them. Appreciate them being here to support me. Alison, I love you.  ",
        "name": "Felder, Sammie #550"
      },
      {
        "date": "January 12, 2000  ",
        "text": "Love ya'll, see you on the other side.  ",
        "name": " Earl Heiselbetz #999014"
      },
      {
        "date": "January 18, 2000",
        "text": " To my family, I love them. To Kami, I love you and will always be with you. That's it Warden.  ",
        "name": " Spencer Goodman #999031  "
      },
      {
        "date": " March 15, 2000",
        "text": " Verbal Statement: Okay, thank you. To the Weis family, and ah I just want you to know from the bottom of my heart that I am truly sorry. I mean it, I'm not just saying it. Through the years of being in prison I come to hear and respect our life. It was wrong what I did. I know you had to go through a lot of pain and I'm sorry. To the Jones family, the same is true, I am truly truly sorry. I wanted to prepare a longer statement but time ran out. I had the chaplain write down a few words for my friends and for you, my family. I would like him to read them for me, and ah, just please find peace. ",
        "name": " Timothy Gribble #000929  "
      },
      {
        "date": " October 12, 1999  ",
        "text": " I would like to say a little something. I just want to say I'm sorry to the family. I know I caused you a lot of pain and suffering and I hope that you will find some peace and comfort in this. That if there is any anger you can let it go. Not let it come between you and God. Sorry for causing everybody such trouble tonight, Bruce, Joe, ya'll all treat me with respect I appreciate it. I really do. I just want to tell my family, everybody I love and I want you to know that I love you, and that God loves you too. Everything is going to be just fine, just fine. I love ya'll. That's it.  ",
        "name": " Alvin Crane #888"
      },
      {
        "date": " May 4, 2000",
        "text": " Yes sir, I would like to address the Robinson family. There is nothing I can say here or anything I could probably do. Now you are all probably mad at me and I would probably be in the same situation you all in if anybody I thought killed anybody in my family ahh. If I knew who killed Rosalyn I would let you know, but, I am going to say this: I am going to heaven with God as my witness. Ros was a personal friend of mine. She was a beautiful person, very educated, her. I'm very tight with the Robinson family. She was proud that she had a father that was a doctor. My family is not here present and that is by my wish and my wish only. Now the tables is turned. You are all here, the Robinson family is her to see me executed. That is something that I would not want for my family. In no form or fashion would I have ever want to see Rosalyn dead. I left the scene of where the incident happened. I guarantee you if I would have been there you would not be standing where you are if I would have been there. You all have some very serious look on your face and something very serious fixin' to happen now. I will say this on my own behalf but then again I know it is not going to make any difference but what you fixing to witness is not a nice thing. It's not nice. It's not nice. The media. I would just like to address to the media with everybody's permission. I would like to say before I go that it has been said that I have shown no remorse, but if you look at my record and my background, ask anybody that know me that in order for me to show any kind of remorse for killing that ever been done, this one time I can't show no remorse for something that I did not do and if I did I would be faking. I would totally be faking and believe me there is nothing fake about me. Nothing fake. I've done wrong, sure, I've paid the time. This is one time that I know I cannot show no remorse for something that I did not do. I am at peace, please believe me. Wherefore, I figure that what I am dying for now is what I have done in my past. This is what I am dying for. Not for killing Rosalyn. I don't know what ya'll call her but I call her Ros, I call her Ros. That's it.  ",
        "name": " Tommy Ray Jackson #821"
      },
      {
        "date": " January 24, 2000",
        "text": " Yes, I do. I want to tell you all how much I love you all, how much I appreciate everything. I love you all and my family. I treasure every moment that I have had. I want the guys to know out there not to give up, not to give in, that I hope someday the madness in the system, something will come about, something will be resolved.  I would gladly trade the last 24 years if it would bring back Mark Fredericks. Give him back his life, give back my father his life, and my mother her health. All I ask is that I have one day and all the memories of you and my family and all the things that have happened. They are executing an innocent man because things did not happen as they say they happen and there's. The truth will come out someday. I am not the same person as I was 24 years ago. Who would have thought it would have taken 24 years to get to this moment? Don't give up, don't give in. If I am paying my debt to society, I am due a rebate and a refund, but I love you all and you all watch out for Mom and you all keep up, keep going.  Thank you, Warden.  ",
        "name": " Billy Hughes #556"
      },
      {
        "date": " May 9, 2000",
        "text": "Yes, sir. James Webb, I don't know which one you are out there. I can't remember from the trial. I personally just want to let you know if there has ever been any doubt in your mind at all of what happened, I want you to know that Patty was always faithful to you, that I forced her for everything that she did and I am sorry. I just don't know how to tell ya'll I am sorry for what I did. There is no way for expressing I am sorry. I just hope that in some kind of way that ya'll can move on and find peace in your life. The Lord has given me peace and that is all that I pray for is that ya'll can find that peace. I just want you to know that I am sorry for what I done. I can't change that, all I can do is say I am sorry, that's nothing for what I have done. I can't replace your loss. I am sorry. I just want you to know that I love all of ya'll. It's been a pleasure, ya'll just keep on with life, it's gonna be good. The Lord's gonna be with us. If it's alright, I just want to say a prayer first. Father, God, I just thank you for the time that you have given me on this earth, for having mercy on somebody like me for all the despicable thing's I've done in my life, Father, but you still with your love and your mercy reach down into my heart and changed it before it's too late. I ask that you bestow peace upon the family of Patricia Webb, that you let them know, Father, that you are in a place where they can obtain that peace, and you will help them move on in their life, Father. Help them, Father, to find it in their hearts, not for my sake , but for yours, and their sake to, Father, find it in their heart to forgive me for what I have done. Father, I just ask that you be with my family and comfort them to move on Father. Father, we are all here today for the mistake that I have made and I thank you for your mercy for sending your Son into this life, that we might come to know you, Father. Father, I pray for these Wardens and the officers and the people that deal with all of this, Father, I ask that you touch their hearts, Father, and if there is any wrong to it, that you will forgive them, Father. Just let them know that you love them, Father, and that You are the way. I just thank you and in Jesus' name, I pray, Amen. I love ya'll, ya'll take care. I am so sorry.  ",
        "name": " William Kitchens #840"
      },
      {
        "date": " January, 20, 2000",
        "text": " Hey, how y'all doing out there? I done lost my voice. Y'all be strong now, alright? Don, thanks man. I love you, Gloria, always baby. That's all I got to say. Hey, don't y'all worry about me, okay?  ",
        "name": " David Hicks #930  "
      },
      {
        "date": "May 23, 2000",
        "text": " Can they talk back? Say I pray for it, I accept it. Pray with me. This is still a statement. Ready? Dear Heavenly Father, forgive us, Lord. I ask that you watch over my Mama and over my sister. I ask this in the name of Christ. I also repent for all my sins, Lord. I pray that you will bring me home tonight. Please, I ask that I rest in your arms in the name of Christ Jesus I pray this. I truly believe that Jesus died for my sins that I may be resurrected, Lord, that you would do that much. Please, I ask that you not let me down and that I will be with you today in Heaven. Christ Jesus name I pray this.  Donna and everybody else, Mr. Johnson, I ask that y'all will pray for me and that God will bring me home tonight, that he will keep me in Heaven, that I will still be in heaven. Please Lord, I don't want to be in Heaven, I mean I don't want to be in Hell. And, please Lord, I confess my sins. This is your son, Lord Jesus, this is your servant, please, this is your slave. I love you, too. Donna and Mama and Mr. Johnson, I wrote a message. Don't give up, love you all, even the ones that are my enemies. I truly forgive all of y'all in Christ Jesus, we pray. I ask God that he take all the hate out of my heart and away from my soul. Please, please, Lord, don't fail me. I don't know is Margie here now? But if she is, I ask her forgiveness. I ask that you not hold nothing against me or my family from this day forward, and hold no hate toward them. I don't know. I can't hear you, you may forgive me, and you may not. Forgive Mike Allison, forgive McHenry, forgive us all. Whatever the cost may be I love you. Take care of my Mama. Donna, I ask you to take care of my Mama, too. Whenever you get mad at her, you remember me. Remember I may be back. Mama, I am going to try to make that promise to you. I gonna ask God to allow his child to come back to see you. Cause I am in Heaven. At time I can come (unintelligible). Okay, Mr. Johnson, you take care, let my Mama's will be done. One more prayer, then we may proceed. Heavenly Father, I confess my sins, really I do. Let me know that I will be in Heaven tonight. Please let me know. I don't want to be in Hell with Satan or anyone else. Please, that is something I need to know. I ask that Jesus give me help.  In Jesus precious name, I pray this. I ask that you give me those promises, that you assure me that those promises are real. That I am praying right. In Jesus precious name, I pray this. Goodbye, Mama. Goodbye, Donna. ",
        "name": " James Richardson #867"
      },
      {
        "date": "June 12, 2000",
        "text": " I understand that Michael Skains is supposed to be here somewhere. They did everything but make sure I got a fair trial to prove I was innocent. I wasn't the one who had the gun to give to police and all these altered records from the District Attorney's office and the Attorney General's office, that's why Michael Sputnick got fired and ran off when I filed these appeals. Not one of my sell out lawyers would use this evidence, because they all work as a conspiracy with the court. No doubt about it. Jack King did everything he could to keep me from making arms and showing this evidence. They wait till the hearing was over and then make the arguments in the court or on paper where nobody can rebut it or contradict the testimony or arguments. There's more than 30 altered and falsified records saying I told so and so this or that, but you go look in their record, it does not say Thomas Mason called them at all and told them anything. But that's okay. All this evidence is being saved, so Jack King can laugh all he wants like he's the big hero, after this is over with, that's fine. But the person that had the gun, they know was not Thomas Mason, so who's getting the last laugh after all? The guy that got away. But Jack King knows he illegally convicted me of all these falsified altered records. My sister's got the document that my lawyer filed, but he didn't file with the court. It's got the signature on it. He put this all in one record. So it's going to be saved. It ain't going to be destroyed just because I'm dead. Everybody's got to go sooner or later and sooner or later everyone of ya'll will be along behind me. That's all I got to say.  ",
        "name": "Thomas Mason #999035"
      },
      {
        "date": "May 31, 2000  ",
        "text": "To the Davis family, I am sorry for all of the pain that I caused your family. It was me and me alone. Anthony Graves had nothing to do with it. I lied on him in court. My wife had nothing to do with it. Anthony Graves don't even know anything about it. My wife don't know anything about it. But, I hope that you can find your peace and comfort in strength in Christ Jesus alone. Like I said, I am sorry for hurting your family. And it is a shame that it had to come to this. So I hope that you don't find peace, not in my death, but in Christ. Cause He is the only one that can give you the strength that you need.And to my family, I love you. Ah, you have been a blessing to me and I love you all and one day I will see y'all, so I hope y'all find y'all peace, comfort, and strength in Christ Jesus alone, because that's where it's at. Abul, behold your son, and Anitra, behold your mother. I love you. I am ready to go home and be with my Lord.  ",
        "name": "Robert Carter #999091  "
      },
      {
        "date": "February 23, 2000",
        "text": " I'd like to apologize to the victim's family. Ah, no ah, I really can't say, I don’t think I can say anything that will help, but I hope through your God, you can forgive me. I'm definitely not the person now that I was then. I was sick, afraid, and looking for love in all the wrong ways. I've caused you pain and grief beyond ever dreaming to cause someone of. I hope you will be able to forgive me. To my mother, I love you very much. Thanks, Jones.  ",
        "name": " Cornelius Goss #912"
      },
      {
        "date": "June 14, 2000",
        "text": "Hey, how are ya'll doing? Alright, it's gong to be alright. There's some guys I didn't get a chance to visit with, ah I met when I first drove up here…Lester Byers, Chris Black, Alba, John Alba, and Rosales Rock. You know who you are. The Raiders are going all the way, ya'll (mumbles…Mo-B). Ya'll pray for me. And it's going to be alright. That's it and it's time to roll up out of her. It's going down, let's get it over with. That's it.  ",
        "name": " John Burks #949"
      },
      {
        "date": " March 1, 2000  ",
        "text": " I'd like to send great love to all my family members, my supporters, my attorneys. They have all supported me throughout this. I thank you for proving my innocence, although it has not been acknowledged by the courts. May you continue in the struggle and may you change all that's being done here today and in the past. Life has not been that good to me, but I believe that now, after meeting so many people who support me in this, that all things will come to an end, and may this be fruit of better judgments for the future. That's all I have to say.  ",
        "name": " Odell Barnes, Jr."
      },
      {
        "date": " May 24, 2000",
        "text": " I have been crucified with Christ. It is no longer I who lives, but Christ who lives in me. So for the life for which I live now in the flesh, I live by faith in the Son of God who loved me and gave himself for me. I love you, Annie. You have been the best friend I have ever had in the world. I'll see you when you get there, okay?  I am ready, Warden.  ",
        "name": " Richard Foster #815"
      },
      {
        "date": "January 27, 2000",
        "text": " Dad, I love you both. You've been the best. All of you, all of you have truly been the best. And ah, I believe I'm going home. I'm sorry, and I really mean that, it's not just words. My life is all I can give. I stole 2 lives and I know it was precious to ya'll. That's the story of my whole life, that's what alcohol will do for you. Oh Jesus, Lord God, take me home. Precious Lord. Take me home Lord. Take me home. Yes, sir. Take me home oh Lord.  ",
        "name": "James Moreland #741"
      },
      {
        "date": " May 11, 2000",
        "text": " Written: The following is the personal final statement of and by Michael L. McBride. The Beatitudes: Jesus lifted up his eyes on His disciples, and said, \"Blessed be the poor: for yours is the kingdom of God. Blessed are ye that hunger now: for ye shall be filled. Blessed are ye that weep now: for ye shall laugh. Blessed are ye, when men shall hate you, and they shall separate you from their company, and shall reproach you, and cast out your name as evil for the Son of Man's sake. Rejoice ye in that day, and leap for joy: for behold, your reward is great in Heaven: for in the like manner did their fathers unto the prophets. But woe unto you that are rich! for ye have received your consolation. Woe unto you that are full! for ye shall hunger. Woe unto you that laugh now! for ye shall moan and weep. Woe unto you, when all men shall speak well of you! for so did their fathers to the false prophets. The supremacy of love over gifts: I Corinthians, Chapter 13: 4-8: Love is patient, love is kind, and is not jealous, love does not brag and is no arrogant, does not act unbecoming; it does not seek its own, is not provoked, does not take into account a wrong suffered, does not rejoice in unrighteousness, but rejoices with the truth; bears all things, believes all things, hopes all things, endures all things. Love never fails; but if there are gifts of prophecy, they will be done away; if there tongues, they will cease. Now abide faith, hope, love, these three: but the greatest of these is love. Poem: Do not stand at my grave and weep, I am not there I do not sleep. I am the diamond glints in the snow, I am the sunlight on the ripened grain. I am the gentle autumn rain. When you awaken in the morning's hush, I am the swift uplifting rush of quiet birds in circled flight, I am the soft stars that shine at night.  Do not stand at my grave and cry, I am not there. I did not die. Signed Michael L. McBride #903 May 11, 2000 Huntsville, Texas ",
        "name": " Michael McBride #903"
      },
      {
        "date": "June 29, 2000",
        "text": "Be strong, brother. Be strong, my brother. Be strong, Mom. It's going to be alright. I love all of you. Don't forget that. Ironic, isn't it? I'm a cross. Ya'll take care of each other. I'll be watching over you. Thank you, Dana……Yes. ",
        "name": "Jessy San Miguel"
      },
      {
        "date": " July 26, 2000",
        "text": " I wish we could pray to Allah, the father of the universe. I ask for your protection and my salvation, my night and my day. I want you to lead me and I will follow. We give praise to Allah the divine and holy prophet. We know that you are Allah, that you are the prophet in these days that is in charge of the human race in this new era of time. These two (unintelligible) to the masters of the temple of the son we have been honored to dwell in our father's house at least for the time in which this finite time has come to it's assigned time for one. There is nothing strange, love governs all events, what is (unintelligible), who is who was his mother and father, we extend my love to all my brothers and sister extend to life and my religion, it is Allah. It is going in salvation of the nation I come from South, Central, and North America. (Unintelligible) that would save us. So, I call on to all of my brothers and sisters and to members of the human race that still have some knowledge for what love divine love is. That comes learned from your ancient forefathers. Love is brought by this prophet Allah. We extend our love to everyone who believes the faith of Islamic and chooses to love along with all their being. We come to understand what is finite and what is infinite. Again, I say it is an honor to live in my father's house. To see this divine great paradise that which I have come to see with the eye of the spirit, the spirit which was revealed by my prophet which was (unintelligible). We extend our love to everybody. Extend my love to my divine sister. Sister Dorothy, and my brother Tomas and we know that our father Allah will bless them in the following days to come. We know that Allah is with us now and forever. The say I am going to have surgery, so I guess I will see everyone after this surgery is performed. It is finished. ",
        "name": " Juan Soria #837"
      },
      {
        "date": "June 15, 2000",
        "text": " Verbal: I have a written statement for the press. It will be released as soon as they can. And I also responded to a comment to me from Sandy, daughter of Ms. Farris. I have felt deeply sorry for the deceased. But I'm sorry that I wasn't the one that did it or anything. She will tell you that when she gets a chance to. When the time comes. I just wish just to be patient when the time for each and everyone of ya'll individually have ya'll time. But I'm not putting pressure on either one of ya'll being having any guilt. I just want to say two thing, executing someone that is innocent, cause even though I am. The burden will be wiped away and you will be at ease to know that I know how it is and they will pay for it when their time comes. And all I have to say is that right now I'm sorry that it happened and I was part, not part in it but, part responsible for not properly getting the word out in time to get the right victim or the right convict or the right person that did it. I just wish to say a little prayer for the family for their appearance and forgiveness in this matter. Our Father, who art in heaven, hallowed by thy name. Thy kingdom come, thy will be done, on earth as it is in Heaven. Give this day your daily bread and forgive us our trespasses as we forgive those who trespass against us. Lead us not into temptation, but deliver us from evil. Our Lord, Amen. And ah, don't be surprised if your Mom be the helper of God that would grab my hand and say \"You are now into eternal life with God.\" This is her being one of the chosen ones to give as proof of innocence. That's what I meant by telling you I don't mean to injure you anymore. When your time comes that she would let you know, if I was innocent or guilty. That about all I have to say. Love you all. ",
        "name": "Paul Nuncio #999158"
      },
      {
        "date": " August 22, 2000",
        "text": " I want the victim's family to know that I didn't commit this crime. I didn't kill your loved one. Sharon Wilson, y'all convicted an innocent man and you know it. There are some lawyers hired that is gonna prove that, and I hope you can live with it. To my family and loved ones, I love you. Thank you for supporting me. Y'all stay strong. Warden, take me home.  ",
        "name": " Richard Jones #882"
      },
      {
        "date": " August 9, 2000",
        "text": "First of all, I want to apologize to the family of Kelly Elizabeth Donovan. I am sorry for what I did to her twelve years ago. I wish they could forgive me for what I did. I am sorry. I am sorry for hurting my family, for hurting my friends. Jesus forgive me. Take me home with you. I am ready. I love you all.  ",
        "name": " Oliver Cruz #954"
      },
      {
        "date": "May 25, 2000",
        "text": "I would like to take this time to, ah, to use this moment an example for Christ. I would like to follow his example and leave with peace in my heart and forgiveness. There is no anger in my heart about this entire situation. I just want to testify to all of y'all that I have loved you. I appreciate your concern and genuine love for me. God bless you. I love all of all. Jesus is Lord.  ",
        "name": " Clayton, James #921"
      },
      {
        "date": " July 12, 2000",
        "text": " Kathy, y'all take and I bless all of you and I am glad I have had y'all in my life. As I have said from the very first thing, I am innocent of this crime and God knows I am innocent and the four people that was murdered know I am innocent and when I get to heaven I'll be hunting you and we'll talk. I feel sorry for the families that's had to suffer and my family and I have 'em all in my prayers. I love you all. Y'all take and y'all look after Sheila and Shannon and them, call 'em and get the pictures to 'em and everything and, ah, again, like I said, I feel sorry for the families, but if it takes my death to make them happy, then I will bless them. I have no hard feelings toward anyone cause the Lord feels that it is my time to come home to Him, my work on earth is done and that, ah, like I said, I am just sorry for, but they will have to go through this one time again, cause sooner or later, whoever did this crime is going to be caught and they'll have to come down here and do this again and they will realize they witnessed an innocent man going to be with Jesus Christ.  ",
        "name": " Joiner, Orien Cecil #902"
      },
      {
        "date": " September 27, 2000  ",
        "text": "Robin you know this ain't right. Mama, Adam, Mike, Sonny, Michelle, y'all know I love you. Tell everybody I said hi and that I love them and I will see them on the other side. Okay? And now I just pray that if there is anything against me that God takes it home. I don't want nobody to be mad at nobody. I don't want nobody to be bitter. Keep clean hearts and I will see y'all on the other side. Okay? I love y'all, stay sweet. I love ya.  ",
        "name": "Ricky McGinn #999150"
      },
      {
        "date": "August 23, 2000",
        "text": " Mr. Bryant, I have wronged you and your family and for that I am truly sorry. I forgive and I have been forgiven. Death is but a brief moments slumber and a short journey home. I'll see you when you get there. I am done, Warden.  ",
        "name": "David Gibbs"
      },
      {
        "date": " August 9, 2000",
        "text": " Since I have already said all I need to say to all my loved ones, I'm not going to say anything to y'all at this time. Y'all know I love you and y'all know where we're at. I will see y'all when you get there. So this is my statement. To all of the racist white folks in America that hate black folks and to all of the black folks in America that hate themselves: the infamous words of my famous legendary brother, Matt Turner, \"Y'all kiss my black ass.\" Let's do it. ",
        "name": "Brian Roberson #886"
      },
      {
        "date": "8/30/2000  ",
        "text": " I would like to extend my love to my family members and my relatives for all of the love and support you have showed me. I extend my special love to my daughter who I love greatly. I hope that you forever remember me. I hope that you will always cherish the love and the strength that I have provided you. My love for you will remain with you winthin your heart and in part of your soul. As to all my brothers I love you all with all of my heart. But during your time of departure from this earth plane you will have to face the judgement of God for the lack of love you have shown my aunt and my cousins. We were never brought up to be that way. As you know our parents brought us up to love one another no matter what. There was no love showed to my aunt or none of my cousins. I can forgive you all but you must ask forgiveness from God for how you have hurt our aunt and our family. I leave now at this moment to join my parents and my only sister whose lives were not taken by me. To all the fellows on death row, I thank you for the love that you have shown me and for the strength that you provided me. You all keep your heads up. As for my attorney's I thank you all for being there for me. As defense attorneys you have shown me a lot strength. May my love touch each one of you all's souls as I leave this body.  ",
        "name": "Jeffery Caldwell #938"
      },
      {
        "date": "November 15, 2000",
        "text": "Mom, I just want y'all to know that I love you. No matter what in life, I want you to stay strong. Doreen, you have been a very special part of my life, too. I want you to keep doing what you are doing. Stay strong. Dad, I want you to stay strong.  ",
        "name": "Tony Chambers #999009"
      },
      {
        "date": " November 1, 2000",
        "text": " I would just like to apologize to the victim's family for what I did. I take full responsibility for that poor woman's death, for the pain and suffering inflicted on Mr. Koslow.  Father, I want to thank you for all of the beautiful people you put in my life. I could not have asked for two greater parents than you gave me. I could just ask for two greater people in their life now. It is a blessing that there are people that they love so much but even more so, people that I love so much.  I thank you for all the things you have done in my life, for the ways that you have opened my eyes, softened my heart. The ways that you have taught me. For teaching me how to love, for all of the bad things you have taken out of my life. For all the good things you have added to it.  I thank you for all of the beautiful promises that you make us in your word, and I graciously received every one of them. Thank you Heavenly Father for getting me off of death row and for bringing me home out of prison.  I love you Heavenly Father, I love you Jesus. Thank you both for loving me. Amen.  ",
        "name": " Jeffery Dillingham #999071"
      },
      {
        "date": "June 22, 2000",
        "text": " I would like to say that I did not kill Bobby Lambert. That I'm an innocent black man that is being murdered. This is a lynching that is happening in America tonight. There's overwhelming and compelling evidence of my defense that has never been heard in any court of America. What is happening here is an outrage for any civilized country to anybody anywhere to look at what's happening here is wrong.  I thank all of the people that have rallied to my cause. They've been standing in support of me. Who have finished with me.  I say to Mr. Lambert's family, I did not kill Bobby Lambert. You are pursuing the execution of an innocent man.  I want to express my sincere thanks to all of ya'll. We must continue to move forward and do everything we can to outlaw legal lynching in America. We must continue to stay strong all around the world, and people must come together to stop the systematic killing of poor and innocent black people. We must continue to stand together in unity and to demand a moratorium on all executions. We must not let this murder/lynching be forgotten tonight, my brothers. We must take it to the nation. We must keep our faith. We must go forward. We recognize that many leaders have died. Malcom X, Martin Luther King, and others who stood up for what was right. They stood up for what was just. We must, you must brothers, that's why I have called you today. You must carry on that condition. What is here is just a lynching that is taking place. But they're going to keep on lynching us for the next 100 years, if you do not carry on that tradition, and that period of resistance. We will prevail. We may loose this battle, but we will win the war. This death, this lynching will be avenged. It will be avenged, it must be avenged. The people must avenge this murder. So my brothers, all of ya'll stay strong, continue to move forward.  Know that I love all of you. I love the people, I love all of you for your blessing, strength, for your courage, for your dignity, the way you have come here tonight, and the way you have protested and kept this nation together. Keep moving forward, my brothers. Slavery couldn't stop us. The lynching couldn't stop us in the south. This lynching will not stop us tonight. We will go forward. Our destiny in this country is freedom and liberation. We will gain our freedom and liberation by any means necessary. By any means necessary, we keep marching forward.  I love you, Mr. Jackson. Bianca, make sure that the state does not get my body. Make sure that we get my name as Shaka Sankofa. My name is not Gary Graham. Make sure that it is properly presented on my grave. Shaka Sankofa.  I died fighting for what I believe in. I died fighting for what was just and what was right. I did not kill Bobby Lambert, and the truth is going to come out. It will be brought out.  I want you to take this thing off into international court, Mr. Robert Mohammed and all ya'll. I want you, I want to get my family and take this down to international court and file a law suit. Get all the video tapes of all the beatings. They have beat me up in the back. They have beat me up at the unit over there. Get all the video tapes supporting that law suit. And make the public exposed to the genocide and this brutality world, and let the world see what is really happening here behind closed doors. Let the world see the barbarity and injustice of what is really happening here. You must get those video tapes. You must make it exposed, this injustice, to the world. You must continue to demand a moratorium on all executions. We must move forward Minister Robert Mohammed.  Ashanti Chimurenga, I love you for standing with me, my sister. You are a strong warrior queen. You will continue to be string in everything that you do. Believe in yourself, you must hold your head up, in the spirit of Winnie Mandela, in the spirit of Nelson Mandela. Ya'll must move forward. We will stop this lynching.  Reverend Al Sharpton, I love you, my brother.  Bianca Jagger, I love all of you. Ya'll make sure that we continue to stand together. Reverend Jesse Jackson and know that this murder, this lynching will not be forgotten. I love you, too, my brother. This is genocide in America. This is what happens to black men when they stand up and protest for what is right and just. We refuse to compromise, we refuse to surrender the dignity for what we know is right. But we will move on, we have been strong in the past. We will continue to be strong as a people. You can kill a revolutionary, but you cannot stop the revolution. The revolution will go on. The people will carry the revolution on. You are the people that must carry that revolutionary on, in order to liberate our children from this genocide and for what is happening here in America tonight. What has happened for the last 100 or so years in America. This is the part of the genocide, this is part of the African (unintelligible), that we as black people have endured in America. But we shall overcome, we will continue with this. We will continue, we will gain our freedom and liberation, by any means necessary. Stay strong. They cannot kill us. We will move forward.  To my sons, to my daughters, all of you. I love all of you. You have been wonderful. Keep your heads up. Keep moving forward. Keep united. Maintain the love and unity in the community.  And know that victory is assured. Victory for the people will be assured. We will gain our freedom and liberation in this country. We will gain it and we will do it by any means necessary. We will keep marching. March on black people. Keep your heads high. March on. All ya'll leaders. March on. Take your message to the people. Preach the moratorium for all executions. We're gonna stop, we are going to end the death penalty in this country. We are going to end it all across this world. Push forward people. And know that what ya'll are doing is right. What ya'll are doing is just. This is nothing more that pure and simple murder. This is what is happening tonight in America. Nothing more than state sanctioned murders, state sanctioned lynching, right here in America, and right here tonight. This is what is happening my brothers. Nothing less. They know I'm innocent. They've got the facts to prove it. They know I'm innocent. But they cannot acknowledge my innocence, because to do so would be to publicly admit their guilt. This is something these racist people will never do. We must remember brothers, this is what we're faced with. You must take this endeavor forward. You must stay strong. You must continue to hold your heads up, and to be there. And I love you, too, my brother. All of you who are standing with me in solidarity. We will prevail. We will keep marching. Keep marching black people, black power. Keep marching black people, black power. Keep marching black people. Keep marching black people. They are killing me tonight. They are murdering me tonight.  ",
        "name": " Gary Graham #696"
      },
      {
        "date": " November 9, 2000",
        "text": " I want to thank my attorneys, Father Walsh...Sylvia, te quiero mucho y a Consulado, te quiero decir muchas gracias por todo. I want to say I am sorry and I say a prayer today for you so you can have peace and I hope that you can forgive me. God is waiting and God is waiting now.  ",
        "name": "Miguel Flores #983  "
      },
      {
        "date": "December 7, 2000",
        "text": "To your family, ah, I hope that this can bring some closure to y'all. I am sorry for your loss and hey, I love all y'all. Let's go.  ",
        "name": "Claude Jones #980  "
      },
      {
        "date": "January 9, 2001",
        "text": " First, I would like to say to the family that I am sorry, and I do ask for forgiveness. There will be also a funeral mass at St. Thomas and I would like to invite all of those from the State and the family to be there if they would like to come. My last words will be: And He was the light that shineth in the hearts of all man from the foundations of the world. If we confess our sins He is just and true to forgive us of our sins and cleanse us from all unrighteousness. Peace and goodness.  ",
        "name": " Jack Clark #994"
      },
      {
        "date": "December 6, 2000  ",
        "text": " Santajaib Singh Ji.  ",
        "name": " Daniel Hittle #981"
      },
      {
        "date": "April 25, 2001  ",
        "text": " I want to give all the praise to God and glory and thank him for all that he done for me. With this let all debts be paid that I owed - real or imagined. The slate is wiped clean, all marked erased other than that there is no justice. That's not justice. Praise the Lord. Glory to Jesus Christ. Praise the Lord God.  ",
        "name": " David Lee Goff #999015"
      },
      {
        "date": " January 18, 2001",
        "text": " He spoke in Irish, translating to \"Goodbye.\"  ",
        "name": " Alvin Goodwin #879"
      },
      {
        "date": " February 8, 2001",
        "text": " I want to thank my family for their help and moral support and for their struggle. It would have been a lot harder without their love. So, I am just going home. I will see ya'll one of these days. Just don't rush it. I will be there always. I 'll always be watching over you. I love you. Okay? Y'all be strong. God bless you. That is where I am going. I love y'all huh. I'll see y'all in Slayton, Texas.  Dios te mandas contigo mi espiritu. (Spanish - God, I command my spirit to go with you.) Alabamos a Dios todos. (Spanish - We all praise God.) Amen Cuida mi familia. (Take care of my family.) I love you. That's it Warden.  ",
        "name": " Adoph Hernandez #978  "
      },
      {
        "date": "November 14, 2000",
        "text": "I am saying, I want y'all to keep your heads up, hold on and stay strong for everybody. I mean ah, I don't want y'all to look at me like I am a killer or something man, cause I ain't no killer. I mean, I didn't, I didn't kill your father. I mean, I know how it look, but I didn't do it. You know what I am saying? You were out there with me, Tommy. I mean, you know man. (mumbled) You know I always did want to say something to y'all. Right? I can't say that I done it because I didn't do it. I've got love for everybody. I am a Christian now. I'm saying I want everybody to keep thier heads up and stay strong. I'm going to stay strong. I'll be seeing you, this is my last breath. Ricky, keep your head up baby. All y'all, Doreen, Melodee. I mean, I know y'all don't come down here. I just really don't know what y'all want me to say. I mean, I know, ah, I mean, I'm sorry anybody, ah, anybody got killed that night. It wasn't supposed to happen, but I didn't do it. I really didn't do it. I don't want y'all to go through life thinking that I did. You know what I am saying? I love everybody and I want y'all to stay strong. Right? It would take me an hour or a long time, man, but, ah, man, I don't want to hold y'all up, man, like that, ah. Y'all just keep your head up and stay strong, man. Give my love to everybody. I love y'all.  ",
        "name": " Stacey Lawton #999066"
      },
      {
        "date": " April 3, 2001",
        "text": " Yes, first I would like to speak to the victims' family.  First of all, I would like to say that I do not know any of y'all and that is unfortunate, because I would like to apologize to each and every one of you individually.  I can't imagine what I have taken from y'all, but I do want to apologize and I want to let you know that I did do it.  You guys know that I am guilty and I am sorry for what I have done.  I apologize and I know that you may not be able to forgive me and I know that may not be able to forgive me in this life and in this world, but I hope sometime in the future you will be able to find it in you to forgive me.  And I want you to know that Christina, she did not suffer as much as you think she did.  I promise you that.  I give you my word.  I know you guys want to know where the rest of her remains are.  I put her remains in the Trinity River.  I have said that since I have come to death row.  I want to apologize to you again.  I hope sometime in the future you can forgive me.  Okay, now I want to speak to my mom and my family.  Brother Anderson, Kathy, I want you to know that I appreciate all these years that you have been coming to see me on death row and Daddy, I love you.  I appreciate y'all being here and being strong for me, and Mama, you know I love you, and I appreciate all of these visits, the letters and everything y'all have done for me.  Y'all have been wonderful.  You too, Granny.  I love y'all and you know, I want to apologize to y'all too for what I have done.  For all of the pain that I have caused, but all of this pain has brought us closer together and all of this suffering that we have been through has brought us all closer to the Lord and in the end that is what counts.  Isn't it?  That's what counts in the end; where you stand with Almighty God.  I know that God has used this to change my life.  And it's all been worth it because of that.  If I lie here today where I lie, I can say in the face of death, Jesus is Lord.  He has changed my life and I know that when I leave this body, I am going home to be with the Lord forever.  That is all I want to say.  I love y'all and I won't say goodbye, I will say I will see you again.  I love you, Daddy. Tonight I dance on the streets of gold.  Let those without sin cast the first stone.  ",
        "name": "Jason Eric Massey #999121  "
      },
      {
        "date": "December 5, 2000",
        "text": " Maggie, I am sorry. I always wanted to tell you but I just didn't know how. I have been praying for y'all. I hope that y'all find the peace that y'all have been wanting. Lord, thank you for all my family, all my friends, and all my brothers on the row. Thank you for my spiritual family. Lord, be merciful with those who are actively involved with the taking of my life, forgive them as I am forgiving them. Be merciful to me a sinner. Protect us Lord as we stay awake and watch over us as we sleep as we wake may we may keep watch with Christ and sleep rest in His peace. All right, Warden. I am ready to go home.  ",
        "name": "Garry Miller #947"
      },
      {
        "date": "June 26, 2001",
        "text": " I love you, I love everyone, I go out with great love and respect.  This is a great day to pass on.  This so called dying.  This is a great day to approach this glorious event.  Approach the present. (mumbling)  Thy will be done.  (more mumbling)  I love you all.  Don't waste your time arguing and bickering.  God loves you all.  All that really matters is love.  Love is the only thing for us.  There is no closure without love.  Forgive one another.  You got to learn how to forgive and embrace one another.  Be one.  Our love is just like...it is the nectar of God.  We have so much to give when we give out of our hearts.  The hear is the wishing well that waters the tree.  I wish and desire one thing.  I wish only the best for all of you.  (unknown tongues)  I love the love in every man and child.  Mankind is my family and tribe.  I am ready grumah.  A poet once said, \"...is my country.  There is no separation between you and me There is no enemies, only family.  I am a minister of love.  I go out loving everyone and everything.  God bless my...country.  I shed tears of love may they nourish everyone.  Stop killing start loving.  Stop the violence.  Let my death change society.  You don't need any more killing.  You don't need any minimum, maximum security, death row.  You don't need the death penalty.  We need more loving fathers and mothers.  It is a good day to die.  Take me God, Hold me in yours and carry me home. ",
        "name": "Miguel Richardson #691"
      },
      {
        "date": " June 13, 2001",
        "text": "I deeply regret what happened. I did not intentionally or knowingly harm anyone. That's it and didmau. (Vietnamese for let's get out of here.) ",
        "name": "John Wheat #999222  "
      },
      {
        "date": "October 22, 2001",
        "text": " Yes, sir. Where's Mr. Marino's mother? Did you get my letter? Just wanted to let you know, I sincerely meant everything I wrote. I am sorry for the pain. I am sorry for the life I took from you. I ask God for forgiveness and I ask you for the same. I know it maybe hard, but I'm sorry for what I did. To my family I love each and every one of you. Be strong. Know my love is always with you...always. I know I am going home to be with the Lord. Shed tears of happiness for me. I love each and everyone of you. Keep on living.  Betty, you have been wonderful. You guided me to the Lord. You have been like a mother to me. Sean, Rusty, Jenny, Marsha, God Bless each and every one of y'all. Jesus, I confess you as my Lord and Savior. I know when I die, I'll have life in heaven and life eternal everlasting. I am ready for that mansion that you promised me. Take care. It's alright Sean, it's alright. I'm going to a better place.  ",
        "name": "Gerald Mitchell #838"
      },
      {
        "date": "November 15, 2001",
        "text": " Ok. I guess I'll address the Morgan family. Mrs. Morgan, the sister from the trial. Thirteen or fourteen years ago, I had a non-caring attitude at the time. I'm sorry for shooting your son down at that particular robbery. Politicians say that this brings closure. But my death doesn't bring your son back - it doesn't bring closure. I wish that I could do more, but I can't. I hope this brings you peace. Ursula, Manon, and Irene, I love y'all - take it easy. They've gotta do this thing. I'm still warm from the pepper gas. I love you. I'm ready to go. Call my mom and tell her that this particular process is over. Tell all the brothers to keep their heads up, eyes toward the sky. ",
        "name": " Emerson Rudd #936"
      },
      {
        "date": " July 11, 2001  ",
        "text": " Sandy, all of you, I am sorry. Please hear me. Please in the name of God forgive me. Please understand. Please find that peace. I am really sorry. Please for your sake forgive me. All of you please.  I love my sister, my friends, father. Thank you for loving me and being with me. You are magnificent people. God has blessed me more than I deserve. I would like to end with a prayer. Heavenly Father, as I come to you to praise and thank you that even now I can endure the pain that you endured when you died for me on the cross. You have forgiven me of my sins and travesties. Thank you, Lord, for giving me strength. Give them strength to forgive me. Ask them to have them forgive me in their hearts. I ask you to touch each and every one of them. I am truly repentant. In the name of Jesus Christ I love you. Warden I am ready to go home please. Remember God is peace, God is love. ",
        "name": "James Wilkins #897"
      },
      {
        "date": " August 8, 2001",
        "text": "First, I would like to tell my family that I love them. I will be waiting on them. I am fine. I hope that everyone gets some closure from this. I am innocent. Lubbock County officials believe I am guilty. I am not. Travis Ware has the burden on him to prove that he did not commit felonies. He needs to be stopped or he is going to do it time and time again. The power is invested in you as a public official to do your job.  That's all Warden. I love y'all.   June 25, 2008.  ",
        "name": " Mack Hill #961"
      },
      {
        "date": " August 16, 2001  ",
        "text": "For almost nine years I have thought about the death penalty, whether it is right or wrong and I don't have any answers. But I don't think the world will be a better or safer place without me. If you had wanted to punish me you would have killed me the day after, instead of killing me now. You are not hurting me now. I have had time to get ready, to tell my family goodbye, to get my life where it needed to be.  It started with a needle and it is ending with a needle.  Carl, you have been a good friend, man. I am going to look for you. You go back and tell your daughter I love her. Tell her I came in here like a man and I will leave like a man. It's been good, dude. Thank you, Shorty. I appreciate you. I came in like a man and I will leave like a man. I will be with you. I will be with you every time you take a shower. If you leave crying you don't do me justice. If you don't see peace in my eyes you don't see me. I will be the first one you see when you cross over.  They got these numbers that I called today. Calling my family.  That is it. Ready, Warden.  ",
        "name": "Jeffery Doughtie #999106"
      },
      {
        "date": "January 9, 2002",
        "text": " I'll start by saying I love all of you.  I will be waiting for your arrival, don't disappoint me by not showing up.  I will be there with the give of Christ.  We'll all be there.  I promise I'll go up smiling.  I am sorry.  If I could think of a word in the vocabulary stronger, you need to hear something stronger, you deserve it.  I'm sorry, I can't take back what I have done.  I have asked Christ for forgiveness, and I ask that you forgive me.  And I understand your feelings.  God bless all of you.  I will be waiting for your arrival.  Do not disappoint me by not showing up.  God bless everybody.  ",
        "name": " Michael Moore #999126"
      },
      {
        "date": " January 16, 2002",
        "text": " Yes sir, members of Mrs. Sanchez's family, I don't know who you are and other people present.  As I said, I'm taking responsibility fro the death of your daughter in 1983.  I'm deeply sorry for the loss of your loved one.  I am a human being also.  I know how it feels, I've been there.  I cannot explain and can't give you answers.  I can give you one thing, and I'm going to give that today.  I'm give a life for a life.  I pray you will have no ill will or animosity.  You have the right to see this, I am glad you are here.  All I can do is ask the Lord for forgiveness.  I am not saying this to be facetious.  I am giving my life.  I hope you find comfort in my execution.  As for me, I am happy, that is why you see me smiling.  I am glad I am leaving this world.  I am going to a better place.  I have made peace with God, I am born again.  Thank you for being here, I'm sorry.  I hope you get over any malice or hatred you feel.  Because it yields sorrow and suffering.  I take responsibility for the loss of your daughter.  I can't give answers.  I hope you can find peace in the days to come.  God bless all of you.  Thank you all for being here. Begins singing:  Amazing Grace  ",
        "name": " Jermarr Arnold #987"
      },
      {
        "date": " January 30, 2002",
        "text": " Yes, Warden.  I just want to let everyone know that this here is a tragedy.  What happened to Diana, Corey, and what is happening to me...it is a tragedy.  That is all Warden.  ",
        "name": " Windell Broussard #999064"
      },
      {
        "date": " December 12, 2001  ",
        "text": " Tell my family I love y'all. Watch out for Momma. Don't want to talk too much, I will cry. I'll just cry everywhere. I'm sorry, Teach, for not being a better son and not doing better things. It wasn't your fault. You raised me the way you should, at least I won't be there no more. I miss you, too. I see you there, you doing alright? I sent you a letter. Neckbone, there's a sheet, I got your name on it. Keep on writing, now. Write to the, hun. Charles, keep the right, now. You people over there. You know what these people are doing. By them executing me ain't doing nothing right. I don't weigh 180 pounds and 5'7\". Take care, love y'all. Did Roger come up here yet? Tell Pat and them I love them. I'm gonna go ahead and let them do what their gonna do. Help your sister, see ya later Pat, love ya Becca. Do what you do, Warden.  ",
        "name": "Vincent Cooks #927"
      },
      {
        "date": " March 7, 2001",
        "text": " I am so sorry for what y'all had to go through. I am so sorry for what all of you had to go through. I can't imagine losing two children. If I was y'all, I would have killed me. You know? I am really so sorry about it, I really am. I got to go sister, I love you. Y'all take care and God bless you. Gracie was beautiful and Tiffany was beautiful. You had some lovely girls and I am sorry. I don't know what to say. All right, Warden, let's do it.  ",
        "name": "Dennis Dowthitt #999047"
      },
      {
        "date": " March 7, 2002",
        "text": " Yes.  My last statement.  I was wrongfully convicted of this crime against Michael Watkins and James Williams on 10th Street on August 31, 1993.  I got convicted on a false confession because I never admitted to it, but my lawyer did not put this out to the jury.  I did not kill those drug dealers.  I send love to my family and friends; my east side family and friends.  I am being real with the real.  That's all that counts in my heart.  I will see you later.  That's it. ",
        "name": "Gerald Tigner #999099"
      },
      {
        "date": "April 10, 2002",
        "text": "First of all, I would like to apologize to the Guajardo family even though they are not present. I loved Yolanda a lot. I hope and pray they can forgive me for all the pain. To my family, stay strong. Tom, Orlando, Celia, stay strong. Michael, thank you for your friendship. Thank you for the support you have given me. I thank all of you and I love all of you. To the guys on death row, stay strong and I hope to see you someday. Bye bye, I love you guys, don't worry about me. It's going to be alright. ",
        "name": "Jose Santellan, Sr."
      },
      {
        "date": "January 31, 2002  ",
        "text": "Spoken: Yes, I do.  My last full statement is being released in a way other than me right here.  All I want to say, I love you all.  Approximately 28 years ago, I remember looking down at a bassinet, I saw an angel.  I am looking at her right now.  I love you, Colleen.  Let's get going.  The road goes on forever, and the party never ends.  Let's rock and roll.  Let's go Warden.  Me and you, all of us.  Remember wet Willie - keep on smiling, keep on smiling.  I love you.  It's on the way, I can feel it.  It's OK, baby.  We have a party to go to.  I can feel it now.  ",
        "name": " Randall Hafdahl #826"
      },
      {
        "date": " February 28, 2002",
        "text": " \"I've got one thing to say, get your Warden off this gurney and shut up. I am from the island of Barbados. I am the Warden of this unit. People are seeing you do this.\"  ",
        "name": "Monty Delk #900  "
      },
      {
        "date": "November 14, 2001",
        "text": " I'd like to tell the Humphrey family, I am sorry for the pain and suffering that I have caused you. I never intended for your husband and father to be killed, it was just an accident. I sincerely regret any pain and sorrow. I realize that my actions have caused this death and a lot of pain and grief. I pray that Jesus will give you peace. I just ask that my death bring you peace and solace. If my death brings you that, then I will gladly give it. I know that I leave this world for the crime that I committed.  To my friends, Jack and Irene Wilcox. Bless you both, you've been my rock. Irene, you have been like a mother and Jack, you have been like a father. To my lawyers, Danalyn and Robert Owen, you are not just my lawyers but you are my friends. I know you weren't happy when I stopped my appeals, but you know the reason why. Thank you for understanding. Have a happy heart knowing I leave this world in peace. Father Walsh, you have helped me so much to come to a knowledge of the Lord. I would never have understood that without you. You give me patience and diligence. Someday I will see you there. I'll be there waiting for you but don't be in a hurry. You have a lot of work left to do. Just know that I'll be watching over you. I love you all and thank you for being a part of my life. (recites the Lord's Prayer) ",
        "name": " Jeffery Tucker #952"
      },
      {
        "date": "May 16, 2002",
        "text": " Yes sir, Thank you.  I love y'all and I want y'all to know that.  Y'all always told me not to worry about myself.  I worry more about you all because I know where I am going.  I want to see you there, so get your heart right.  You know I love you and care for you.  I am going to go with my little boy and play with him.  Y'all take care and I love y'all.  I love y'all.  Chaplain Wilcox, Roger, Robin, Sarah, Grandma.  I love you.  Y'all be careful.  Lord Jesus, I see your Spirit, it's o.k.  I love you. ",
        "name": " Ronford Styron #999124  "
      },
      {
        "date": " May 22, 2002",
        "text": "First of all, I want to say that I want to apologize to Clay Peterson's father.  I am sorry.  And I want to thank you for everything you tried to do; it meant a lot to me.  I want to thank David Dow; you have been great to me and I know that I am fixing to die - but not for my mistakes.  My trial lawyers - they are the ones that are killing me.  I love my family and I know where I am going.  You all take care - Celina, David and tell Mama I love her, too.  I didn't call her 'cause I just couldn't.  I am going to heaven and I'll see you there.  Tom Crouch, and everybody, I love you.  Chiara, thank you for everything.  Fred, Rachel, Daniel, Oralia - thank you for being there for me.  I will be there with you all in spirit.  David Dow, you have been great.  Mary Moreno, from the Corpus Christi Caller Times, thank you for what you wrote.  You have been sincere and I wanted to talk to you, but they wouldn't let me.  David Dow, let them know what happened.  I am fine; I am happy; I will see you on the other side.  ",
        "name": "Johnny Joe Martinez"
      },
      {
        "date": "April 11, 2002",
        "text": " I just want to tell my Mom that I am sorry that I caused her so much pain and my family and stuff.  I love them and I hurt for the the fact that they are going to be hurting.  I really hate that; and that I'm hoping they are going to be O.K.  ",
        "name": "William Burns #692"
      },
      {
        "date": "April 30, 2002",
        "text": " Yes, sir.  I want to give thanks to Father Walsh, my spiritual advisor and Mr. Whiteside and Irene Wilcox and her husband, Jack, and Richard Lopez for being there for me through all of this.  I don't see O'Brien.  Oh, there he is. Thanks to everybody.  Everybody will be all right, because y'all are going where I am going.  Remember what I said, I want to see you all where I'm going.  I want to give thanks.  God, come and do Your will.  I'm ready Warden.  ",
        "name": " Rodolfo Hernandez #807  "
      },
      {
        "date": " May 9, 2002",
        "text": " I pray that we all may learn to love and forgive so that we can have peace in the world.  It is with loving and forgiveness and living to learn to love and loving to live that we can learn the power of forgiveness and learn to live as brothers and sisters on this earth.  Until then, this will continue to happen -- capital punishment; and if we don't forgive, sooner or later we will all self-destruct.  You need to open up your heart and let God in.  I apologize for taking the life of your daughter and I know how much pain you must be in because I saw my family today.  And although my pain is not as deep as yours, I am very sorry.  Today, this does not bring you peace because this is not really the way.  We should forgive and love and I do apologize with all my heart and soul and I love you and I know your spirit and God dwells within us and we are all one big family of humanity; we must all learn to love and live together.  I will see you on the other side.  Thank you for your hospitality. ",
        "name": " Reginald Reeves #999119"
      },
      {
        "date": "June 26, 2002",
        "text": "The Lord is my Shepherd, I shall not want. He maketh me lie down in green pastures; He leadeth me beside the still waters, He restoreth my soul. He leadeth me in the paths of righteousness for His name's sake. Yea, though I walk through the valley of the shadow of death, I will fear no evil; for Thou art with me. Thy rod and Thy staff, they comfort me. Thou preparest a table before me, in the presence of mine enemies. He anointeth my head with oil; my cup runneth over. Surely goodness and mercy shall follow me all the days of my life, and I will dwell in the House of the Lord forever. Amen. Amen.",
        "name": "Jeffrey Williams #999154"
      },
      {
        "date": " May 28, 2002",
        "text": " The act I committed to put me here was not just heinous, it was senseless.  But the person that committed that act is no longer here - I am.  I'm not going to struggle physically against any restraints.  I'm not going to shout, use profanity or make idle threats.  Understand though that I'm not only upset, but I'm saddened by what is happening here tonight.  I'm not only saddened, but disappointed that a system that is supposed to protect and uphold what is just and right can be so much like me when I made the same shameful mistake. If someone tried to dispose of everyone here for participating in this killing, I'd scream a resounding, \"No.\"  I'd tell them to give them all the gift that they would not give me...and that's to give them all a second chance. I'm sorry that I am here.  I'm sorry that you're all here.  I'm sorry that John Luttig died.  And I'm sorry that it was something in me that caused all of this to happen to begin with.   Tonight we tell the world that there are no second chances in the eyes of justice...Tonight, we tell our children that in some instances, in some cases, killing is right. This conflict hurts us all, there are no SIDES.  The people who support this proceeding think this is justice.  The people that think that I should live think that is justice.  As difficult as it may seem, this is a clash of ideals, with both parties committed to what they feel is right.  But who's wrong if in the end we're all victims? In my heart, I have to believe that there is a peaceful compromise to our ideals.  I don't mind if there are none for me, as long as there are for those who are yet to come.  There are a lot of men like me on death row - good men - who fell to the same misguided emotions, but may not have recovered as I have.  Give those men a chance to do what's right.  Give them a chance to undo their wrongs.  A lot of them want to fix the mess they started, but don't know how.  The problem is not in that people aren't willing to help them find out, but in the system telling them it won't matter anyway.  No one wins tonight.  No one gets closure.  No one walks away victorious.  ",
        "name": " Napoleon Beazley #999141"
      },
      {
        "date": "August 7, 2002  ",
        "text": " Well, yes, sir.  Rebecca, I understand that you wanted this day to come, you got what you wanted.  I didn't kill your mother.  The two guys that worked for me killed your mother and they are still out there.  If Mr. McDougal had allowed the DNA evidence, I would be exonerated.  Mr. Tolson, I understand you are out there.  If there is any justice in this world, please use this to keep other people from being where I'm at.  Warden, this is murder just as surely as the people that killed Rebecca's mother.  Send me home.  ",
        "name": " Richard Kutzner #999227"
      },
      {
        "date": " May 30, 2002",
        "text": " Well, I don't have anything to say.  I am just sorry about what I did to Mr. Peters.  That's all.  ",
        "name": "Stanley Baker, Jr. #999157  "
      },
      {
        "date": "June 25, 2002",
        "text": " I'm innocent. I had nothing to do with my family's murders. I want to thank everyone who has supported me. I hope they continue to fight. You know who you are. That's all. Thank you, Warden.  ",
        "name": " Robert Coulson #999115"
      },
      {
        "date": "August 28, 2002",
        "text": "I am sorry for the pain: sorry for what I caused my friends, family and loved ones.  I feel a great deal of responsibility and guilt for all this crime.  I should be punished for the crime, but I do not think I should die for a crime I did not commit.  I am sorry, but nothing can bring Kim, Ollie, and Gigi back.  But I pray my death brings peace for my family that may unite the family.  I ask for your forgiveness and that you will all forgive me.  I have no animosity;  I am at peace and invite you all to my funeral.  We are still family.  I love you all, Momma, Aunt Deidra, family and everybody.  I love you.  I am ready, Warden.  ",
        "name": "Toronto Patterson #999178"
      },
      {
        "date": " September 10, 2002",
        "text": " Spoken: I would like to say goodbye to a good friend of mine in Switzerland - Diego.  I appreciate all the help and support he gave me through the years.  A friend of mine in England.  Wildflower:  I love you and will never forget you.  And to my family.  That's all. ",
        "name": " Tony Lee Walker #999082"
      },
      {
        "date": " September 18, 2002",
        "text": " A lot of people have always asked if there is a Heaven, and I say there is.  There is a Heaven and a Hell.  They ask, \"Who goes to Heaven?\"  I believe that it is those who have placed their faith in Jesus Christ. Romans 3:25:  For all have sinned and come short of the glory of God. Romans 6:23:  The wages of sin is death, but the gift of God is eternal life. Romans 5:8:  While we were yet sinners, Christ died for us. Romans 10:9:  If you confess with your mouth the Lord Jesus Christ, and that He was raised from the dead, thou shalt be saved. John 3:16:  For God so loved the world, that He gave his only begotten Son, that whosoever believeth in Him shall have everlasting life. A lot of people forget about: John3:36:  If you have the Son, you have life and if you have not the Son, the wrath of God lies on you. In this life, we sin and we make mistakes: 1 John 1:19:  If we confess our sins, He is faithful and just to forgive our sins. I had a verse that jumped out at me a few days ago.  Psalm 99:8 speaks of the holiness of God and He was to the people a God who forgave, but He took vengeance on his deeds.  I am not here because of my faith in the Lord Jesus, but I am here for not other reason than my own actions.  To the Bakers, I am really sorry for the pain and sorrow I caused you.  I really do not know what to say, but I am sorry - forgive me.  And to my parents, I am sorry for the pain I have caused you.  Forgive me; thank you for your love. ",
        "name": "Ron Shamburger #999167"
      },
      {
        "date": " August 14, 2002",
        "text": "First of all, I would like to apologize to the family members of the Cadena family for whatever hurt and suffering I have caused you.  This opportunity has never come up before.  It's not that I haven't been remorseful, things just never worked out before.  Please forgive me and I hope you find it in your heart to forgive me.  The peace you will find will be a temporary peace, true peace will come through find Christ.  I pray through this execution, that you will find the peace you seek.  Give yourself to Christ and find peace through him.  I thought about your loved one very much.  He will be waiting in heaven for me.  I will be able to talk to him and ask him for forgiveness personally.   To my family, I thank you and love you for being there for me and supporting me.  This is just a stepping stone to home.  The hardest part of all the years I was on death row.  To all people that supported me, you will always be in my heart, as I have always been in yours.  God bless you.  Keep your heads up, see you again soon.  Forgive me for the pain I caused you. (Spanish) To all the people of Mexico, I would like to thank them for the help.  I also want to carry each and every one of you in my heart.  If you are going to demonstrate, I don't want you to do anything crazy to these people.  They have suffered enough.  Long lives Mexico.  Raise the flag of Mexico with honor.  Thanks for everything.  I love you. (English) To everyone on death row, keep your heads up and I will see you again.  I am truly sorry, may you find peace in this.  Forgive me for the pain.  God bless you, I love you all, and I'm ready to go home.  ",
        "name": "Javier Suarez Medina #944"
      },
      {
        "date": " August 20, 2002",
        "text": " Yes, sir. To the victim's family, I'm sorry for what was taken from you. I hope you find peace. To my sweet Claudia, I love you. Stay strong, keep building, and be careful. Be careful. I love you. I'm through.  ",
        "name": "Gary Etheridge #986"
      },
      {
        "date": " August 8, 2002",
        "text": " I would like to say to the family, I regret the pain I've put you through and I hope you can get over it someday.  Mom and Dad, I love you.  Take care.  I'm ready.  ",
        "name": " T.J. Jones #999133  "
      },
      {
        "date": "October 1, 2002",
        "text": "I am ready for the final blessing.  ",
        "name": "James Powell #999001"
      },
      {
        "date": "September 24, 2002",
        "text": " I would like to say a final prayer: Dear Heavenly Father, I come to you today, Lord, and thank You for this opportunity to be with You in paradise.  I ask You for forgiveness for the ones that need to be forgiven.  Dear Lord, deliver us from evil and give us the comfort and peace and joy that we need.  Dear Lord, I ask You right now to be with each of the witnesses and lift them up and be on solid ground.  Let them know what has gone on and may we all see each other again.  Amen. I would like to thank each witness:  Ms. Cox, Whiteside, Reed, Scott, and Chad.  I am going to go and see Jesus tonight and reserve a special place for each one of you.  You all have been there when no one else was.  Thank you for all of your love and support.  Just know that I am ready to go.  You all know what I've gone through.  I am going to a better place with the Lord.  I'm mad for one reason, that I'm leaving you behind, when I am going to a better place.  Y'all still have to go through this hell on earth.  Just remember the good things and not the bad.  You are all loved and respected. Warden, just give me parole and let me go home to be with the Lord.  ",
        "name": " Rex Mays #999172  "
      },
      {
        "date": "November 19, 2002",
        "text": " I would like to say first of all the real violent crimes in this case are acts committed by James Boswell and Clay Morgan Gaines. We have the physical evidence to prove fabrication and cover-up. The people responsible for killing me will have blood on their hands for an unprovoked murder. I am not guilty; I acted in self-defense and reflex in the face of a police officer who was out of control. James Boswell had his head beat in; possibly due to this he had problems. My jurors had not heard about that. They did not know he had suffered a head injury from the beating by a crack dealer five months earlier; that he was filled with anger and wrote an angry letter to the Houston Chronicle. He expressed his frustration at the mayor, police chief and fire chief. He was mad at the world. Three and a half months before I worked on a deal with the DEA, the informant was let off. At the moment he left the courtroom, he became angry with me; Officer Boswell was upset about this. Officer Boswell and an angry woman were in the police car and they were talking in raised voices. In other words, Officer Boswell was angry at the time I walked up. Officer Boswell may have reacted to the...(Offender stopped speaking in mid-sentence.) ",
        "name": "Craig Ogan #979"
      },
      {
        "date": "December 11, 2002",
        "text": " The only thing I want to say is that I appreciate the hospitality that you guys have shown me and the respect; and the last meal was really good. That is about it. Thank you guys for being there and giving me a little bit of spiritual guidance and support.  ",
        "name": "James Collier #999190"
      },
      {
        "date": "September 25, 2002  ",
        "text": " I want to say God forgives as I forgive. God is the greatest. Thank you.  ",
        "name": " Calvin King #999152"
      },
      {
        "date": "January 28, 2003",
        "text": " I pray with the help of God that you will forgive me for the pain I caused your family. I am truly sorry. I wish I could take it back, but I just pray and ask that you forgive me.  ",
        "name": "Alva Curry #999080"
      },
      {
        "date": " November 20, 2002",
        "text": "Jane, Grace and all of you all, I know you think I did this, and I'm sure you think this is wonderful in you eyes.  But, let me tell you something, there were two DNA tests run and none matched me.  I wanted a third, but that never happened.  Three people at different times confessed to killing these people - your parents.  They did not know me.  My request is that you get yourselves in church and pray for forgiveness because you are murdering me.  I did not kill anyone in my life.  If you will look at your house and the police report, there are several bullet patterns shot into the West wall over the bed and the East wall and North wall and your sister was in the front bedroom while 30 shots were fired.  There's no way in hell she would have laid in that bed.  If you think I did this, you need to think again.  There were three people in the house and have confessed to it.  Larry Ashworth in Fort Worth killed seven people.  All I was asking for was a DNA and I could not get it.  But get in church and get right with God.  Jane, you know damn well I did not molest that kid of yours.  You are murdering me and I feel sorry for you.  Get in church and get saved.  I really don't know what else to tell you.  ",
        "name": "William Chappell #960"
      },
      {
        "date": " January 14, 2003",
        "text": " Written: There are many things I would like to say, but none more important that how I feel toward Mr. & Mrs. Kenney, and Ms. Arnott.  I would like to apologize and say I'm sorry but words seem so hollow and cheap.  Their death should not have happened, but it did.  I'm so sorry that all of this took place.  Now I have devastated my family as well, but my heart has grown in the last few minutes because I was forgiven by the family of Mr. & Mrs. Kenney, and Ms. Arnott.  Thank You.  You have given me more hope then I have had in a long time.  If I could change things I would, not for my sake but for all those who have loved me over the years, and for those who have forgiven me.  Thank you for all that you have given me.  ",
        "name": "Samuel Gallamore #999090"
      },
      {
        "date": "January 22, 2003",
        "text": " I would like to thank all my loved ones that are standing over there for all the kindness and support you have shown me over the years.  Be strong.  Do not hate, but learn from this experience.  Just because it happens, do not think that God doesn't care.  He will be with you.  I will be there with all of you.  I love you all and appreciate all of you.  You won't be forgotten and there are a lot of people out there that love you.  It has been a blessing to know all of you.  This is not easy for any of us.  Don't be upset about my situation, because I am not.  I am still faithful and I am still strong.  Just give my love to everyone out there.  Don't forget me and burn a candle for me when you can.  I love you all.  ",
        "name": "Robert Andrew Lookingbill #990"
      },
      {
        "date": " January 30, 2003",
        "text": " I would just...(speaking in French).  I love all of you.  I love you Lundy, Levi, my dad.  I have no grudges against anyone, or any of the things that have gone wrong.  I would like to say to the world, I have always been a nice person.  I have never been mean-hearted or cruel.  I wish everybody well. ",
        "name": " Granville Riddle #965  "
      },
      {
        "date": "February 6, 2003",
        "text": "Spoken: To all my family and friends, I want you to know that I love you very much.  I appreciate all the good and bad times together.  I'll always remember you, and love you forever.  And to the West family, I hope you can find it in your heart to find forgiveness and strength, to move on and find peace.",
        "name": "Henry Earl Dunn, Jr. #999165  "
      },
      {
        "date": " January 29, 2003",
        "text": " Written  To the families of Ms. Thompson and Ms. Cutler. I am sorry for what happened and that it was because of me that they are gone.  If there were any way I could change things and bring them back I would. But I can't.  Because of what I caused to happen many people were affected and I am very sorry that I did.  I have made my peace with God and I pray that soon everyone will be able to have closure in their hearts and lives.  To my family and friends, I love you and some day we will all be together again.  ",
        "name": "Richard Dinkins #999022  "
      },
      {
        "date": "March 11, 2003",
        "text": "I would like to say to the victim's family, if this goes on record, that I know they have gotten grief and I know with this execution, it will not be any relief to them. That with my death, it will just remind them of their loved one, Mr. Holder. I would like to say to them, \"please forgive me for what happened; it was self defense...and I was never able to get up on the stand to tell them.\" I know this is wrong. I am going home to the Lord.  ",
        "name": "Bobby Cook #999094"
      },
      {
        "date": " April 22, 2003",
        "text": "To the media, I would like for you to tell all the victims and their loved ones that I am truly, truly sorry for taking their loved ones' lives.  And I hope they will find it in their heart to forgive me for what I did to them.  I am a different person now, but that does not change the fact of the bad things I have committed.  God can give you the same peace He gave me and you can be in His hands.  And to my beautiful family, be strong.  Remember what I said, \"God is the Way, the Truth, and the Life.\"  OK, Warden.  ",
        "name": "John Chavez #999186"
      },
      {
        "date": " February 25, 2003",
        "text": " Spoken: The statement I would like to make is to all my loved ones - and to the Abrahams and Williams families.  We came a long way through the tragedy - from hate to love and I would like to apologize for the pain I have caused all my families on both sides.  I am looking at you Mr. Frank: I am sorry brother for what happened to your sister and I hope that you would forgive me one day.  Ask God to forgive me and ask God to forgive you and allow me to pass through.  My brother Farooq, I love you my brother and send my love to all my family members.  And I was not a monster like they said I was.  I made a mistake and this mistake cost - but they won't cost no more.  I leave you with all my love and blessings.  may Allah bless each and every one of you. ",
        "name": "Richard Head Williams #999251"
      },
      {
        "date": " May 15, 2003",
        "text": " Can you hear me, Chris?  The Lord is my Shepherd; I shall not want.  He makes me to lie down in green pastures; He leads me beside the still waters.  He restores my soul;  He leads me in the paths of righteousness for His name's sake.  Yea, though I walk through the valley of the shadow of death, I will fear no evil; for Thou art with me;  Thy rod and Thy staff comfort me.  Thou preparest a table before me in the presence of my enemies;  Thou anointest my head with oil;  My cup runneth over.  Surely goodness and mercy shall follow me all the days of my life;  And I will dwell in the house of the Lord forever. I want to thank you for being there with me all these years and supporting me and keeping me in the Word.  Michael, you take care of her and thank you Father Don and Chris.  And I want to thank the media for being nice to me all this time.  Bye, Chris.  I will see you.  Take care of yourselves and you all stay strong.  You keep doing your ministry.  ",
        "name": " Bruce Jacobs #876  "
      },
      {
        "date": " June 11, 2003",
        "text": "Tell Mama I love her and tell the kids I love them, too.  I'll see you all.  ",
        "name": "Kia Johnson #999139"
      },
      {
        "date": "March 26, 2003",
        "text": "The statement that I would like to make is, none of this should have happened and now that I'm dying, there is nothing left to worry about. I know it was a mistake. I have no one to blame but myself. It's no big deal about choosing right from wrong. I pray that everyone involved overlooks the stupidity. Everybody has problems and I won't be a part of the problem anymore. I can quit worrying now, it was all a mistake. That's all I want to say.  ",
        "name": "James Colburn #999169"
      },
      {
        "date": "July 23, 2003",
        "text": " I just want to address Katrina and Rebecca. You have been beautiful to me. Without you in my life, I would not have been able to make it like this. Probably, I would have put up a good fight; you have calmed me. I love you. I respect you. Big brother, you put up the best fight you could and I love you. That is it. ",
        "name": "Cedric Ransom #999050"
      },
      {
        "date": "September 10, 2003",
        "text": " I would like for Rosalyn's family and loved ones and my wife, Mary's, family to know that I am genuinely sorry for what I did.  I would like you to reach down in your hearts and forgive me.  There is no excuse for what I did.  Rosalyn's mother asked me at the trial, \"Why?\" and I do not have a good reason for it.  Please forgive me.  As for my friends and family here - thanks for sticking with me and know that I love you and will take part of you with me.  I would like to thank one of the arresting officers that I would have killed if I could have.  He gave me CPR, saved my life, and gave me a chance to get my life right.  I know I will see Mary and Rosalyn tonight.  I love you all.  ",
        "name": "Larry Hayes #999358"
      },
      {
        "date": " July 24, 2003",
        "text": " First of all, I want to say God bless everyone here today.  For many years I have done things my way, which caused a lot of pain to me, my family and many others.  Today I have come to realize that for peace and happiness, one has to do things God's way.  I want to thank my family for their support.  I love you.  I am taking you with me.  You all stay strong.  I love you.  I also want to say thanks to the Chaplains who I have met through the years and who have brought me a long way.  And I cherish you as my family and at this time...oh, Ken, my little son, I am coming to see you.  Oh Lord, into your hands I commit my spirit.  Thy will be done.  ",
        "name": "Allen Janecka #684"
      },
      {
        "date": " December 03, 2003",
        "text": "I did have, but now I see my family here and everything - all I want to say is I love you all so much. I am innocent. I love you all so much. You are beautiful. Okay Warden, I am through.  ",
        "name": "Duncan, Richard #999153  "
      },
      {
        "date": " December 04, 2003",
        "text": " Yes sir, I do.  I would like to thank everybody for coming out tonight and celebrating life.  This is a celebration of life, not death.  Through Jesus Christ, we have victory over death.  I would like to thank the Holy Father and Pope John Paul for their angelic blessings and all the prayers and support.  And thanks to Father (name unknown) and Guido Todeschini for your love and support.  I want to thank everybody around the world and Father, let your will be done.  I am going to keep this statement short.  I love you all.  I am ready, Warden.  ",
        "name": "Ivan Murphy #989  "
      },
      {
        "date": "July 2, 2003",
        "text": " First of all, I would like to ask Sister Teresa to send Connie a yellow rose. I want to thank the Lord, Jesus Christ, for the years I have spent on death row. They have been a blessing in my life. I have had the opportunity to serve Jesus Christ and I am thankful for the opportunity. I would like to thank Father Walsh for having become a Franciscan, and all the people all over the world who have become my friends. It has been a wonderful experience in my life. I would like to thank Chaplain Lopez, and my witnesses for giving me their support and love. I would like to thank the Nuns in England for their support. I want to tell my sons I love them; I have always loved them - they were my greatest gift from God. I want to tell my witnesses, Tannie, Rebecca, Al, Leo, and Dr. Blackwell that I love all of you and I am thankful for your support. I want to ask Paulette for forgiveness from your heart. One day, I hope you will. It is a tragedy for my family and your family. I am sorry. My special angel, I love you. And I love you, Connie. May God pass me over to the Kindom's shore softly and gently. I am ready.  ",
        "name": " Hilton Crawford #999200"
      },
      {
        "date": "January 14, 2004",
        "text": " Yes sir.  I would like to thank God for all the blessings He has given me.  And I pray that through His mercy, He will allow me into His grace.  And to the family of Ms. Ayers, I would like to apologize for all the pain and suffering and that God gives you closure.  And I pray that He blesses you.  And to my family, know that I love every single one of you and pray that God gives you peace and strength.  I may not be with you in the physical, but by grace, my heart will be with you all and I know God loves every one of you all.  ",
        "name": "Kenneth Bruce #999023"
      },
      {
        "date": "January 21, 2004",
        "text": " Yes. Connie, Nanny, Bea, Kathy and Richard - I love you all and I thank you all very much for supporting me with your love. In the name of Jesus, I am sorry for the pain I caused you all. I am sorry. Gilbert didn't deserve to die and I want you all to know I am sorry. I pray that the good Lord will give you all peace. Okay. ",
        "name": "Kevin Zimmerman #977  "
      },
      {
        "date": "March 20, 2003",
        "text": "I would like to say first and foremost to the Lord God Almighty that I am sorry and forgive me of every single solitary sin I have committed these 35 years I have lived upon this Earth.  To the Varghese family, I would ask that you forgive me because I know you have suffered a great loss and I am truly, truly sorry.  I know what you have suffered, but please grant me your forgiveness.  I am truly sorry, and there is not a day that I have not prayed for you.  And to my Mom, I love you.  I am going to see the Lord.  The Lord is my Shepherd.  Let everyone know that I love them; this is not goodbye.  I will see you later.  ",
        "name": " Keith Clay #999238"
      },
      {
        "date": " February 11, 2004",
        "text": "Yes.  I just want to say I am not sad today or bitter with anybody.  Like I've said from day one, I did not go in there and kill them - but I am no better than those that did.  Jesus is Lord.  ",
        "name": " Edward Lagrone #999083"
      },
      {
        "date": "February 17, 2004",
        "text": "Yeah. The only statement I want to make is that I am an innocent man - convicted of a crime I did not commit. I have been persecuted for 12 years for something I did not do. From God's dust I came and to dust I will return - so the earth shall become my throne. I gotta go, road dog. I love you Gabby. [Remaining portion of statement omitted due to profanity.] ",
        "name": "Cameron Todd Willingham #999041"
      },
      {
        "date": "June 30, 2004",
        "text": "Yes I do.  Sir, in honor of a true American hero. \"let's roll\".  Lord Jesus receive my spirit.  ",
        "name": " David Ray Harris"
      },
      {
        "date": " August 25, 2004",
        "text": " Yes I do.  I want to tell everyone, my family, thanks for standing by me.  I want to tell Mr. and Ms. Gray and everyone that I didn't do what I did to hurt you all.  I am sorry that I did what I did.  I don't think you know the true reason for doing what I did, but Brandy and I had a suicide pact and I just didn't follow through with it.  That did not come out in the trial.  I am not trying to hurt you by telling you this.  I am trying to tell you the truth.  I want Cindy to know that I know she is out there -- and Vicente Hernandez that I love them.  Thank you for all you have done and I want to make sure you are alright.  That is all I want to say.  I am ready.  See you later.  I am ready.  ",
        "name": " Busby, Jasen Shane"
      },
      {
        "date": "January 28, 2004",
        "text": "Yes.  I would just like to say to my family that I am sorry for all the grief I have caused.  I love you all.  Tell Mama and the kids I love you; I love all of you.  And I would like to clear some things up if I could.  Tommy Perkins, the man that got a capital life sentence for murdering Kinslow -- he did not do it.  I did it.  He would not even have had anything to do with it if he had known I was going to shoot the man.  He would not have gone with me if he had known.  I was paid to shoot the man.  And Martin, the younger boy, did not know what it was about.  He thought it was just a robbery.  I am sorry for that.  It was nothing personal.  I was trying to make a living.  A boy on Eastham doing a life sentence for killing Jamie Kent - I did not do it, but I was with his daddy when it was done.  I was there with him and down through the years there were several more that I had done or had a part of.  And I am sorry and I am not sure how many - there must be a dozen or 14 I believe all total.  One I would like to clear up is Cullen Davis - where he was charged with shooting his wife.  And all of these it was never nothing personal.  It was just something I did to make a living.  I am sorry for all the grief I have caused.  I love you all.  That is all I have to say. ",
        "name": "Billy Vickers #999087"
      },
      {
        "date": "March 3, 2004",
        "text": " Yes Warden, I do. Well Mom, sometimes it works out like this. Love life; live long. When you are dealing with reality, real is not always what you want it to be. Take care of yourselves. I love you. Tell my kids I love them. God is real. He is fixing to find out some deep things that are real. Bounce back, baby. You know what I'm saying. You all take care of yourselves. That is it.  ",
        "name": " Marcus Cotton #999252"
      },
      {
        "date": " September 21, 2004",
        "text": " Yes sir.  Today I go home to the Lord.  But first, I have to say something.  I am real sorry.  I took family member's life and I shouldn't have.  I hope that you can move on.  I am just sorry.  I don't know what else to say.  I can't bring anyone back.  I would if I could.  I hope you will be fine.  I won't ask for your forgiveness.  God will be my judge.  To my family and friends, I love you all.  You all take care and somebody find Void.  Be strong and I will see you all; hopefully not soon.  Keep your head up.  That is all I have to say.  ",
        "name": "Andrew Flores  "
      },
      {
        "date": " May 18, 2004  ",
        "text": "Statement to what.  State What.  I am not guilty of the charge of capital murder.  Steal me and my family's money.  My truth will always be my truth.  There is no kin and no friend; no fear what you do to me.  No kin to you undertaker.  Murderer.  [Portion of statement omitted due to profanity] Get my money.  Give me my rights.  Give me my rights.  Give me my rights.  Give me my life back.",
        "name": "Kelsey Patterson"
      },
      {
        "date": "October 05, 2004  ",
        "text": "Yes I do.  To my family, to my friends, and people who have accepted me for being the person that I am.  To the Sullivan and Hayden families, I do not come here with the intention to make myself out to be a person that I am not.  I never claimed to be the best person.  I am not the best father, the best son, or the best friend in the world.  I did the best I could with what I had.  I come with no hate in my heart or bitterness.  To my family and to you people, I can only apologize for all the pain I caused you.  May God forgive us on this day.  I am ready when you are.  ",
        "name": "Edward Green  "
      },
      {
        "date": "October 06, 2004  ",
        "text": " Into your hands Oh Lord, I commence my spirit.  Amen.  ",
        "name": "Peter Miniel"
      },
      {
        "date": " October 12, 2004",
        "text": "Yes sir, I would.  To the West Family, I would just like to apologize for your loss.  I hope that you can forgive me.  To my family and loved ones and friends, I thank all of you all for your support and I am sorry for the pain and hurt I have caused you.  I love you all and I will see you on the other side.  O.K. Warden.  ",
        "name": "Aldrich, Donald  "
      },
      {
        "date": "October 20, 2004",
        "text": " Yes, I do.  I want to say first that I love you Pam.  I love you, Ann, Jenny, Carla, Fran, Mom and Dad.  What a blessing, what a blessing you have been in my life.  And I am so sorry you are going through what you are now.  But we are both headed to a better place.  Thank you, baby girl - love you people.  Sister, Blackie, Dixie, Rusty, Andy, Buster, Milo - we got so many - Grace and Sonny man.   I love you all.  You have a treat coming to you.  Thank you for having been there for me -- and our Father and Mother.  Give them a hug and give them my love.  I am ready Warden.  ",
        "name": "Ricky Eugene Morrow"
      },
      {
        "date": "August 26, 2004",
        "text": " Yeah.  I want to thank my family and friends; my family for all loving me and giving me so much love.  I am sorry; I really am.  You, Brian's sister, thanks for your love --  it meant a lot.  Shane -- I hope he finds peace.  I am sorry I destroyed you all's life.  Thank you for forgiving me.  To the moon and back -- I love you all.  ",
        "name": "Allridge III, James Vernon"
      },
      {
        "date": " November 9, 2004",
        "text": "I do.  I just wanted to say to all of those that have supported me over the years that I appreciate it and I love you.  And I just want to tell my mom that I love her and I will see her in Heaven.  ",
        "name": "Demarco Markeith McCullum  "
      },
      {
        "date": " November 4, 2004",
        "text": "Yes I do. Mike and Ms. Allison, I would like to tell you that I am responsible and I am sorry for what I did and the pain I caused you all. I love you Earline and all of my friends that stood by me. I feel blessed to have had you all. Stay strong and take care of them kids. Set me free Warden. Father, accept me.  ",
        "name": "Robert Morrow #999244"
      },
      {
        "date": "November 10, 2004",
        "text": " Yes.  Well here we are again folks, in the catacombs of justice.  You know there is a lot I wanted to say - a lot I thought I'd say - but there is not a whole lot to say.  There are people that will be mad thinking I try to seek freedom from this, but as long as I see - freedom belongs to me and I'll keep on keeping on.  The shackles and chains that just might hold my body can't hold my mind, but will kill me otherwise.  I love you momma, and Misty and Annette, Brenda and Anthony - and all my friends and everybody that supported me.  I leave my love here; I am never going to stop loving you.  My love is going to stay here.  ",
        "name": "Frederick Patrick McWilliams"
      },
      {
        "date": " November 17, 2004",
        "text": "Yes sir.  Sorry that I have to put my family through this.  All of you know I got my peace.  And I hope you find peace.  And to the family, the truth will come out and I hope you find peace.  I got my peace.  I hope everybody has their peace.  I am tired.  I am going to be in your heart.  I love you all.  To everybody else, the truth will be known.  It didn't come out in time to save my life.  It is wrong to put the families through this.  But when it comes out, I hope it stops this.  It is wrong for the prosecutors to lie and make witnesses say what they need them to say.  The truth has always been there.  I just hope everybody has their peace.  Today I get mine.  I love you all.  ",
        "name": " Anthony Guy Fuentes"
      },
      {
        "date": "January 4, 2005",
        "text": " Yes sir, I do. I would like to apologize to the family of the victim. I am sorry for the pain I have caused you. I know it is a great loss and I want to apologize. I am sorry. And to my family, I love you and I will see you all in Heaven. O.K.  ",
        "name": " James Porter"
      },
      {
        "date": " March 8, 2005",
        "text": " I want to apologize to you, and I am sorry.  I have made a lot of mistakes in my life.  The things I did changed so many lives.  I can't take it back, it was an atrocity.  I am sorry.  I beg your forgiveness, I know I am not worthy of it.  I love you Mom and Dad, and all my family.  Thank you for everything.  Jesus, thank you for your love and saving grace.  Thank you for shedding your blood on Calvary for me.  Thank you Jesus for the love you have shown me.  ",
        "name": "George Hopper"
      },
      {
        "date": " October 26, 2004",
        "text": " Yes.  Man, there is a lot of people there.  There was a lot of people that got me to this point, and I can't thank them all.  But thank you for your love and support; they have allowed me to do a lot more than I could have on my own.  Sheila, I wish I would have met you seven years ago; it would have been a lot easier.  But I have overcame a lot.  I am not angry, but I am disappointed that I was denied justice.  But I am happy that I was afforded you all as family and friends.  You all have been there for me; it's a miracle.  I love you.  And I have to tell Jessica I am sorry.  I never knew it would come to this.  Lorna, you know you have to keep my struggle going.  I know you just lost your baby; but you have to keep running.  Andy, I love you man.  Tell Andre and them that I didn't get a chance to reach my full potential, but you can help them reach theirs.  You needed me, but I just did not know how to be there for them.  There is so much I have to say, but I just can't say it all.  I love you all.  Please just keep the struggle going.  If you turn your back on me, you turn your back on them.  I love you all and I'll miss you all.  Thanks for allowing me to touch so many hearts.  I never knew I could do it, but you made it possible.  I am just sorry.  And I am not as strong as I thought I was going to be.  But I guess it only hurts for a little while.  You all are my family.  Please keep my memory alive.  ",
        "name": "Dominique Green   "
      },
      {
        "date": "January 25, 2005",
        "text": " Yes sir.  I would like to ask you to forgive me.  I made a mistake and I am sorry for what I did.  All I can do is ask you to forgive me.  I love you and I will see all of you in Heaven.  I love you very much.  Praise Jesus.  I love you.  Our Father, who art in Heaven, hallowed be thy name.  Thy kingdom come, Thy will be done, on earth as it is in Heaven.  Give us this day our daily bread, and forgive us our trespasses as we forgive those who have trespassed against us.  And lead us not into temptation, but deliver us from evil.  Amen.  ",
        "name": "Troy Kunkle  "
      },
      {
        "date": " April 20, 2005",
        "text": "Yes sir, Warden Okay I've been hanging around this popsicle stand way too long.  Before I leave, I want to tell you all.  When I die, bury me deep, lay two speakers at my feet, put some headphones on my head and rock and roll me when I'm dead.  I'll see you in Heaven someday.  That's all Warden. ",
        "name": "Douglas Roberts"
      },
      {
        "date": "February 17, 2005",
        "text": " Yes sir, can you hear me?  To you Irene, Thank You.  I love you all.  All right Warden, I'm ready.  ",
        "name": " Bagwell, Dennis"
      },
      {
        "date": " May 18, 2005",
        "text": "Yes sir. To Edie, Tom, and and Carma - I love all you all.  I appreciate all your support.  I love you Margherita, Father Guido, and Father Angelo.  I appreciate your spiritual support and all those that were in prayer for me.  I will be O.K.  I am at peace with all of this and I won't have to wake up in prison any more.  I love you all.  I totally surrender to the Lord.  I am ready, Warden. ",
        "name": " Bryan Wolfe #999079"
      },
      {
        "date": "May 19, 2005",
        "text": "Yes, I do.  I just want to thank all my friends and family who gave me support these past eight years.  I want to apologize to the victim's family for the pain I caused them.  And to everyone at the Polunsky Unit, just keep your heads up and stay strong.  ",
        "name": "Richard Cartwright"
      },
      {
        "date": "June 7, 2005",
        "text": "Yes.  The victim's family is not here so I won't address them.  I want to thank my family and friends for everything.  My wife, Ailsa, my sister-in-law, Laura - thank you for being here for me.  I love you.  And thanks for the friends at the Polunsky Unit that helped me get through this that didn't agree with my decision - and still gave me their friendship.  I thank them.  Warden...  ",
        "name": "Alexander Martinez"
      },
      {
        "date": " October 20, 2005",
        "text": " Yes I do. I would like to address you first. I did not kill your loved one, but I hope that one day you find out who did. I wish I could tell you the reason why, or give some kind of solace; you lost someone you love very much. The same as my family and friends are going to lose in a few minutes. I am sure he died unjustly, just like I am. I did not murder him; I did not have anything to do with his death. And to you my family and friends, I love you dearly. Even though I die, that love for you will never die. Into Your hands, Lord, I commit my spirit. Thank you. Thank you all. ",
        "name": "Luis Ramirez"
      },
      {
        "date": "November 15, 2005",
        "text": "Yes sir. I would like to apologize to the victim's family and all the grief I have caused them. I would like to say I love the girls next to them. Praise the Lord. Let's go, Warden. That's it. ",
        "name": "Robert Dale Rowell  "
      },
      {
        "date": "November 09, 2005",
        "text": "Jack and Irene, I love you guys.  Tell my family I love them.  I am sorry for the things I have done.  I know God will forgive me.  Keep track of Danielle for me.  I will miss you guys.  I love you.  I guess that's all. ",
        "name": "Charles Daniel Thacker  "
      },
      {
        "date": "August 10, 2005",
        "text": "I would like the Chaplain to say a prayer, not only for me but for the victim's family.  For them being misled, I am sorry.  That is all I have to say. ",
        "name": " Gary Sterling"
      },
      {
        "date": " November 16, 2005  ",
        "text": "Yes.  Man, I just want you to know how much I love them.  I want you to be strong and get through this time.  Do not fall back.  Keep going forward.  Don't let this hinder you.  Let everybody know I love them (several names listed), Kevin - as well as everyone else in the family.  Tell them that I love them and stay strong.  This is kind of hard to put words together; I am nervous and it is hard to put my thoughts together.  Sometimes you don't know what to say; I hope these words give you comfort.  I don't know what to say.  I want you to know I love you; just stay strong and don't give up.  Let everybody know I love them...and love is unconditional, as Mama has always told us.  I may be gone in the flesh, but I am always with you in spirit.  I love you. ",
        "name": "Shannon Charles Thomas  "
      },
      {
        "date": " January 31, 2006",
        "text": " Yes sir. Darling Kerstin, these last few years have been blessed having you in my life. And to all my friends that have been out there, thank you for your friendship and support and all you have done for me. The guys back there waiting, keep the faith and stay strong and put your faith in the Lord. Many times in life we take the wrong road and there are consequences for everything. Mistakes are made, but with God all things are possible. So put your faith and trust in Him. We talk about a reprieve or stay from the Supreme Court, but the real Supreme Court you must face up there and not down here. Keep your heads up and stay strong. I love you all. That is it. Stay strong. Thank you.  ",
        "name": "Elizalde Jr., Jaime"
      },
      {
        "date": "November 03, 2005",
        "text": " Tell Beth and them I am sorry, truly sorry for the pain that I caused your family.  I truly mean that too.  She was a friend of mine and I betrayed her trust.  I love you all.  Tell momma I love her. The Lord is my shepherd; I shall not want,  He maketh me to lie down in green pastures; he leadeth me beside the still waters.  He restoreth my soul; he leadeth me in the paths of righeousness for his name's sake.  Yea, though I walk through the valley of the shadow of death, I will fear no evil; for thou art with me.  Thou preparest a table before me in the presence of mine enemies; thou anointest my head with oil; my cup runneth over.  Surely goodness and mercy shall follow me all the days of my life; and I will dwell in the house of the Lord for ever.   Our Father, who are in heaven, Hallowed be thy Name.  Thy kingdom come.  Thy will be done, On earth as it is in heaven.  Give us this day our daily bread.  And forgive us our trespasses, As we forgive those who trespass against us.  And lead us not into temptation, But deliver us from evil.  For thine is the kingdom, and the power, and the glory, for ever and ever.  Amen  All right Warden, let's give them what they want. ",
        "name": " Melvin Wayne White #999317"
      },
      {
        "date": " February 8, 2006",
        "text": " Yes.  Ms. Carolyn Barker, and Tina, I would like to apologize to you all.  To Amy's sister, and everybody else here.  I love you all.  I hope you can find it in yourselves to forgive me and I hope all this here will kinda settle your pain and I hope the Lord will give you comfort and peace.  And I just want you to know I am very sorry for what I have done.  And if I see Amy on the other side, I will tell her how much you love and miss her and we will have a lot to talk about.  Mom, Dad, and Charlotte - I am sorry for putting you through all this pain and stuff.  I did talk to Brandon and I think I got a little stuff stopped.  I love you all and I will see you on the other side.  O.K. ",
        "name": " Robert Neville Jr."
      },
      {
        "date": "February 15, 2006",
        "text": "Yes.  I want to thank you all for being here and for your love and support.  And thanks for the efforts, Peter and Lorrell.  I love you all.  Celina, I love you.  I'm done. ",
        "name": " Clyde Smith, Jr.  "
      },
      {
        "date": " March 15, 2006",
        "text": " I love my family. You all stay strong. Watch over each other. Stay strong. I love you. I love you. It's my hour. It's my hour. I love you. Stay strong.  ",
        "name": "Tommie Hughes"
      },
      {
        "date": "October 6, 2005",
        "text": " Yes sir, I do.  To the victim's family.  I hope it helps a little.  I do not know how, but I hope it helps.  I love you all, all of you.  You know I love you.  Thank you for bringing my children back to my life.  Thank you.  I love you all.  I love you all very much.  Thank you very much.  (Statement amended 01/09/06)  ",
        "name": "Ronald Howard  "
      },
      {
        "date": "March 22, 2006",
        "text": " Yes.  Yes, I do.  Do I just talk to the front?  O.K.  To everybody on both sides of that wall--I want you to know I love you.  I am sorry that the child had to lose her life, but I should not have to be here.  Tell my family I love them all and I will see them in Heaven.  Come home when you can.  I am done.  Love you all. ",
        "name": "Robert Salazar, Jr."
      },
      {
        "date": " May 3, 2005  ",
        "text": " Yes. I would like to address the victim's family. I received your poem and I am very grateful for your forgiveness. I still want to ask for it anyway. I have Jesus in my heart and I am sorry for any pain I caused you all. Thank you for your forgiveness. I am sorry. Ashlee, Pam -- I am going to miss you all. I love you all. Give everybody my love. Give everybody my love, O.K.? Mother, James, Justin, Corey, Brent, grand-babies and Daddy - I love you Pam. I love you Ashlee, Pammy and Irene. I will see you all on the other side. Couple friends on death row who have helped me; Shy Town and Crazy Jay...I love you all and for all your support. Uncle Ray too. I am saved and I am going home, O.K.? You all stay strong. You all stay strong. That is all.  ",
        "name": " Lonnie Pursley"
      },
      {
        "date": " March 29, 2006",
        "text": "Yes. I would like to thank all my friends and supporters, Anne West, who I love and respect. Gabrielle Uhl from Germany, and so many countless other friends. And of course my family, my mother and father, brothers and sisters, nieces and nephews, my wife Barbara and my children - Nadia, Amenia, Kira, and Noemi. I love my children. I love my family. That's it.  ",
        "name": "Kevin Kincy  "
      },
      {
        "date": "May 17, 2006",
        "text": " Yes sir.  To Mr. Jerry Nutt, I just hope this brings some kind of peace to your family.  I wish I could bring them back, but I can't.  I hope my death brings peace; don't hang on to the hate.  Momma, stay strong.  Lord forgive me for my sins because here I come.  Let's go, Warden.  ",
        "name": " Jermaine Herron"
      },
      {
        "date": "May 24, 2006",
        "text": " Yes sir.  I would like to say to my family, I am alright. (Spanish) Where are you Leo; are you there Leo? (Spanish) Don't lie man.  Be happy.  Are you happy?  Are you all happy? (Spanish)  ",
        "name": " Aguilar, Jesus Ledesma"
      },
      {
        "date": "June 20, 2006",
        "text": " Yeah.  Momma, I just want you to know I love you.  I want all of you to know I love you all.  I am at peace; we know what it is.  We know the truth.  Stay out of crime; there is no point in it.  I am at peace.  We know the truth and I know it.  I have some peace.  I am glad it didn't take that long - no 10 or 20 years.  I am at peace.  And I want everyone to know I did not walk to this because this is straight up murder.  I just want everybody to know I didn't walk to this.  The reason is because it's murder.  I am not going to play a part in my own murder.  No one should have to do that.  I love you all.  I do not know all of your names.  And I don't know how you feel about me.  And whether you believe it or not, I did not kill them.  I just want you all to have peace; you know what I'm saying.  There is no point in that.  It is neither here nor there.  You have to move past it.  It is time to move on.  You know what I'm saying.  I want each one of my loved ones to move on.  I am glad it didn't last long.  I am glad it didn't last long.  I am at peace.  I am at peace to the fullest.  The people that did this - they know.  I am not here to point fingers.  God will let them know.  If this is what it takes, just do what you got to do to get past it.  What it takes.  I am ready, Warden.  Love you all.  Let my son know I love him. ",
        "name": "Lamont Reese"
      },
      {
        "date": "June 6, 2006  ",
        "text": " Yes, your honor.  I know you people are here to find closure for the things that you have done or that I have done.  There are no words to describe the pain and suffering that you have gone through all these years, that is something that I cannot take back from you all.  I hope that Megan, if she is here present today, know that today I hope you get peace and joy.  I am sorry that it has taken 14 years to get closure.  If it would have brought closure or brought her back, I would have done this years ago, I promise, I promise. My family all knows the sincerity in my heart when I say these words to you.  I didn't mean to inflict the pain and suffering on your family.  I pray that she is safe in Heaven.  I pray that you find closure and strength.  My family prays for you and everybody, if these words can ever touch your heart, I am sorry, I am truly sorry.  Ya'll take care.  I love ya'll.  Pastor tell Megan I am sorry. ",
        "name": " Timothy Titsworth  "
      },
      {
        "date": " May 04, 2006",
        "text": " May I speak to my family?  Honey, I love you.  Be strong and take care of yourselves.  Thanks for being there.  Take care of yourself.  Ms. Irene, thank you for everything you have done.  Chaplain Hart, thank you for helping me.  Gary, thank you.  Maria, Maria, I love you baby.  Thank you for being there for me and all these people here will find the one who did this damn crime.  I am going home to be with God.  Thank you.  Thank you, Warden. ",
        "name": "Jackie Wilson #957  "
      },
      {
        "date": "June 27, 2006",
        "text": " Yes sir. I want to ask if it is in your heart to forgive me. You don't have to. I know I allowed the devil to rule my life. I just ask you to forgive me and ask the Lord to forgive me for allowing the devil to deceive me. I thank God for having patience with me. I don't deserve to cause you pain. You did not deserve this. I deserve what I am getting. ",
        "name": " Angel Maturino Resendiz"
      },
      {
        "date": " July 19, 2006",
        "text": " Yes, I do.  To the victim's family, I am sorry you lost a brother, loved one, and friend.  To my family, I love you all.  Keep your heads ups and know I will be in a better place.  And you all look after Aleda and make sure she is a part of this family.  I appreciate you all and love you.  I apologize that you lost a loved one this way.  God bless you all.  O.K. Warden.  ",
        "name": "Brown, Mauriceo M."
      },
      {
        "date": " July 20, 2006",
        "text": " Yes, I would like to make a short brief one please.  To Audrey's grandmother, I am sorry for the pain I have caused you for the last 15 years and your family.  I have regretted this for a long time.  I am sorry.  I only ask that you remember the Lord because He remembers us and He forgives us if we ask Him.  I am sorry.  And to my family, and my loved ones - I am sorry for the pain for all those years and for putting you through all the things we had to go through.  I ask the Lord to bless you all.  Tammy, Irene, Betty, Dan Judy - I love you all.  And Jack, thank you.  Warden...  ",
        "name": " Anderson, Robert"
      },
      {
        "date": " August 3, 2006",
        "text": "Yes I do. I would like to say to my two brother-in-laws and the rest of my family that I would like to thank you for supporting me through all of this. I went home to be with my Father and I went home as a trooper. I would like to say to Damien's family I did not murder your son. I did not do it. I just want you to know that -- I did not murder Damien and would ask for all of your forgiveness and I will see all of you soon. I love you guys. I love you guys. That's it. ",
        "name": "William E. Wyatt, Jr. #999255"
      },
      {
        "date": "August 17, 2006",
        "text": " Yes sir, to my family and children, I love you very much.  Dianne, Virginia, Toby and Irene I love all of you.  I apologize for not being the man you wanted me to be.  I am going to be free, I am going to Heaven.  Please be strong and I love you all. To the Wright family, I pray for you, please find peace in your heart.  I know you may hate me for whatever reason, the Lord says hate no one.  I hope you find peace in your heart.  I know my words cannot help you, I truly mean what I say.  God Bless you all.  I love you Dianne, Mary Virginia. Kick the tires and light the fire, I am going home to see my son and my mom, I love you and God Bless you.  ",
        "name": " Richard Hinojosa"
      },
      {
        "date": "August 24, 2006  ",
        "text": " Yes I do, I would like to tell my family thank you for your support, and my friends. And let everyone know that you must stay strong for each other. Take care of yourselves. That's it, Warden.  ",
        "name": " Justin Fuller"
      },
      {
        "date": "September 12, 2006",
        "text": " To my family and my mother and my three precious daughters, I love you all.  And to my brother and sister for standing with me throughout this situation.  Stay strong and know that I'm in a better place.  I ask for forgiveness.  And to the victim's family, find peace and cancellation with my death and move on.  Our Lord Jesus Christ, I commend myself to you.  I am ready.  ",
        "name": " Farley Matchett"
      },
      {
        "date": "July 11, 2006",
        "text": " I do.  I am sorry.  I have always been sorry.  It is the worst mistake that I ever made in my whole life.  Not because I am here, but because of what I did and I hurt a lot of people - you, and my family.  I am sorry; I have always been sorry.  I am sorry.  You look after each other.  I love you all.  Be there for one another.  Alright.  But I am sorry; very sorry.  I love you too.  Alright. ",
        "name": " Derrick O'Brien"
      },
      {
        "date": "November 1, 2006",
        "text": " To my family, first and foremost - I love you all. The calmness that I was telling you about, I still have it. You are Mario's Uncle, correct? I just wanted you to know that I wronged your family. I received nothing, I was not paid. I took his life for the love of a friend. I love you all. I just want you to know that. I know he does, I feel it. I'm alright. Make sure momma knows, alright. Jermaine, I love you too man. Alright Warden.  ",
        "name": " Donell Jackson  "
      },
      {
        "date": "November 8, 2006",
        "text": "All praises be to God. I would like to say to the Garza family, see my smile, it is not from happiness. I took a father, it wasn't my fault, it was an accident... God knows the truth. If my life could bring your father back, then let it be. Don't take my smile for Disrespect. If I see your father I will ask him forgiveness. I told the Judge the truth it was an accident. I'll smile and I am not sad. If my life could make you happy, be free. I'll say when I see him I'm sorry. I have no anger nor fear. Mom have no fear. Mommy I will be home when I get there. ",
        "name": "Willie Shannon  "
      },
      {
        "date": " August 31, 2006",
        "text": " Yes I do.  Debbie, my Baby, I love you; do you know I love you.  You are my life.  You are my wife - always stay strong.  Stay strong everybody.  I am innocent.  I am being punished for a crime I did not commit.  I have professed my innocence for nine years, and I continue to say I am innocent.  Let my people know I love them.  We must continue on.  Do not give up the fight; do not give up hope for a better future.  Because we can make it happen.  I love you, I love my son, and I love my daughter.  Bruno, Chuckie, Juanita, Ray - I love you, all of you.  Stay strong baby.  I love you forever.  ",
        "name": "Derrick Frazier  "
      },
      {
        "date": "January 10, 2007",
        "text": "Yes, Love you mom, love you pop, love you Sara, and Amanda.  Um, Cathy you know I never meant to hurt you.  I gave you everything and that's what made me so angry.  But I didn't mean to hurt you.  I am sorry.  That's it.  ",
        "name": "Carlos Granados"
      },
      {
        "date": "January 17, 2007   ",
        "text": " Jennifer, where are you at?  I'm sorry, I did not know the man but for a few seconds before I shot him.  It was done out of fear, stupidity, and immaturity.  It wasn't until I got locked up and saw the newspaper.  I saw his face and his smile and I knew he was a good man.  I am sorry for all your family and my disrespect - he deserved better.  Sorry Gus.  I hope all the best for you and your daughters.  I hope you have happiness from here on out.  Quit the heroin and methadone.  I love you dad, Devin, and Walt.  We're done Warden.  ",
        "name": " Jonathan Moore  "
      },
      {
        "date": " February 7, 2007",
        "text": " You know, once upon a time diamonds were priceless.  I never knew until I ran across my own.  I just want Eve to know that.  One of these days I'm going to return and get that for myself.  Thank you to my family, I love you.  Each and every one of you.  This is not the end, but the beginning of a new chapter for you and I together forever.  I love you all.  Remember what I told you Brad.  Ms. Irene, God bless you, I love you.  See you on the other side.  Warden, murder me.  Saddam and Gomorrah which is Harris County.  ",
        "name": "Jackson, James"
      },
      {
        "date": " February 22, 2007",
        "text": " Yes, for all of those that want this to happen, I hope that you get what you want and it makes you feel better and that it gives you some kind of relief.  I don't know what else to say.  For those that I have hurt, I hope after a while it gets better.  I love you, I love you.  I am sorry.  That's it, goodbye.  I love you Irene, I love you sis.  ",
        "name": "Anderson, Newton"
      },
      {
        "date": " March 7, 2007",
        "text": " Profanity directed toward staff.  ",
        "name": "Nichols, Joseph  "
      },
      {
        "date": " March 20, 2007",
        "text": "Ya'll know I love you, you too Ward.  You have been a good friend.  You are a good investigator.  Doug, I thank you for coming from Michigan.  Chris and David, I love you.  Thank them for their support Doug.  Debra, James, I'm not crying so you don't cry.  Don't be sad for me.  I'm going to be with God, Allah, and Momma.  I'm gonna ask dad why didn't give you away at your wedding.  Randy Greer, my little brother, I'll be watching you, stay out of trouble.  All my nieces and nephews, I love you all.  Sammie, Vincent, and Yolanda, I will be watching over you all. The reason it took them so long is because they couldn't find a vein.  You know how I hate needles - I used to stay in the Doctor's Office.  Tell the guys on Death Row that I'm not wearing a diaper.  I can't think of anything else.  You all stay strong.  Now you can put this all aside.  Don't bury me in the prison cemetery.  Bury me right beside momma.  Don't bury me to the left of dad, bury me on the right side of mom. Kim Schaeffer, you are a evil woman.  You broke the law.  The judges and courts helped you and you didn't have all the facts.  When you look at the video, you know you can't see anyone.  You overplayed your hand looking for something against me and to cover it up the State is killing me.  I'm not mad or bitter though.  I'm sad that you are stuck here and have to go through all of this.  I am going somewhere better.  My time is up.  Let me get ready to make my transition.  Doug, don't forget Marcy.  ",
        "name": " Charles Nealy #999289  "
      },
      {
        "date": " March 28, 2007",
        "text": " I do, I would like to tell everybody that I'm sorry about the situation that happened.  My bad - everybody is here because of what happened.  I'd like to thank everybody that's been here through the years.  The little kids overseas - they really changed me.  Sister Doris, mom, brothers, sister, dad; I love ya'll.  My brother... where's my stunt double when you need one?  My Lord is my life and savior, nothing shall I fear.  ",
        "name": " Vincent Gutierrez"
      },
      {
        "date": " March 29, 2007",
        "text": " Yes sir,  I charge the people of the jury.  Trial Judge, the Prosecutor that cheated to get this conviction.  I charge each and every one of you with the murder of an innocent man.  All the way to the CCA, Federal Court, 5th Circuit and Supreme Court.  You will answer to your Maker when God has found out that you executed an innocent man.  May God have mercy on you. My love to my son, my daughter, Nancy, Kathy, Randy, and my future grandchildren.  I ask for forgiveness for all of the poison that I brought into the US, the country I love.  Please forgive me for my sins.  If my murder makes it easier for everyone else let the forgiveness please be a part of the healing.  Go ahead Warden, murder me.  Jesus take me home.  ",
        "name": "Pippin, Roy  "
      },
      {
        "date": " April 11, 2007  ",
        "text": "Uh, I don't know, Um, I don't know what to say.  I don't know.  (pauses)  I didn't know anybody was there.  Howdy.",
        "name": " Clark, James"
      },
      {
        "date": " June 20, 2007",
        "text": " First of all, you have every right to hate me and every right to want to see this. To you and to my family, you don't deserve to see this.  I wasn't going to apologize by letter, I wanted to apologize face to face.  None of this should have happened.  It is the right thing to do.  I have a good family, just like you are a good family.  I hope that any bitterness that you have because of what I did, I hope you can learn to forgive.  I asked my family to contact you, because they did no wrong.  I am responsible and I am sorry to you all.  Thank you all my Jefe (dad), my brothers, Maria and my Grandfather.  Thank you, we will see each other again.  Thank you, Lord Jesus receive my spirit. ",
        "name": " Rodriguez, Lionell"
      },
      {
        "date": " April 26, 2007  ",
        "text": "Yes, Sir I do. I'd like to say I love my mother, brother, sister, grandmother, cousins, and nieces, and my brothers and sisters I have never met. I do apologize to the Surace family. I am responsible for them losing their mother, their father, and their grandmother. I never meant for them to be taken. I am sorry for what I did and I take responsibility for what I did. That is all Warden.  ",
        "name": "Dickson, Ryan"
      },
      {
        "date": " March 6, 2007  ",
        "text": " Yes sir, Ernest, Christopher, Ochente, Mary and Jennifer tell all the kids I love them and never forget.  Tell Bobby, Mr. Bear will be dancing for them.  Tell Bear not to feel bad.  My love always, I love you all.  Stay strong Mary, take care of them.  I love you too.  I am ready Warden.  ",
        "name": "Robert Perez"
      },
      {
        "date": "June 21, 2007",
        "text": " I love ya'll and I'm gonna miss ya'll. ",
        "name": "Gilberto Guadalupe Reyes"
      },
      {
        "date": "June 26, 2007  ",
        "text": " Yes, I do.  I thank the Lord for giving me my friends, for getting me the ones I love.  Lord reach down and help innocent men on death row.  Lee Taylor needs help, Bobby Hines, Steve Woods.  Not all of us are innocent, but those are.  Cleve Foster needs help.  Melyssa, I love you girl.  I know I wasn't going to say anything, but I've got to.  Jack, Irene, Danny, Doreen, I love you guys.  I said I was going to tell a joke.  Death has set me free.  That's the biggest joke, I deserve this.  And the other joke is I am not Patrick Bryan Knight, and ya'll can't stop this execution now.  Go ahead, I'm finished.  Come on, tell me Lord.  I love you Melyssa, take care of that little monster for me.  ",
        "name": "Knight, Patrick  "
      },
      {
        "date": " July 24, 2007",
        "text": "Yes I would. Carrie it's been a joy and a blessing. Take care, give everybody my regards. I love you, and I'll see you in eternity. Father take me home. I am ready to go.  ",
        "name": "Johnson, Lonnie"
      },
      {
        "date": " August 15 , 2007",
        "text": " Can ya'll hear me? Tell my family that I love ya'll. Joe, Tim, everybody - keep your head up. I love you.  ",
        "name": "Kenneth Parr  "
      },
      {
        "date": " August 28, 2007",
        "text": " Yes. I just want to let you all know that I appreciate the love and support over the years. I will see you when you get there. Keep your heads up. To all the fellows on the Row, the same thing. Keep your head up and continue to fight. Same thing to all my pen friends and other friends, I love you all. I can taste it.  ",
        "name": " Daroyce Mosley"
      },
      {
        "date": " August 22 , 2007",
        "text": " Could you please tell that lady right there, can I see her, she is not looking at me. I want you to understand something, hold no animosity towards me. I want you to understand please forgive me. When I get to the gates of Heaven I will open my arms for you. Please forgive me, do not worry about what is going to happen. I don't want you to worry. I don't want you to suffer, I am not mad at you. Shed no tears for me. Even though you don't know me, I love you, I love all of ya'll. I ask ya'll in your heart to forgive me. To my family, I love all of you. What's happening now, you are suffering. I didn't mean to hurt you. Stephanie, Felicia, Carlos and my Father. I love my Father. I want you to understand that life goes on. Continue to live your life and don't be angry at what is happening to me. This is destiny, this is life. This is something I have to do and I am going to be with my momma and your momma. I want everyone to continue to live your life. Thank you and I love all of you. What is happening to me now is unjust and the system is broken. At the same time I bear witness there is no God but Allah and the Prophet Mohammad. Unto Allah, I belong unto Allah I return. I love you.  ",
        "name": "Conner, Johnny   "
      },
      {
        "date": "August 29, 2007",
        "text": " God forgive them, God forgive them for they know not what they do. After all these years my people are still lost in hatred and anger. Give them peace God for people seeking revenge towards me. I love you guys, I love you guys. God give them peace. I love you Chiquita. Peace, Freedom, I'm ready.  ",
        "name": " Amador, John"
      },
      {
        "date": "September 25 , 2007",
        "text": "Yes, I would like for my family to take care of each other. I lovel you Angel, Let's ride. I guess this is it. ",
        "name": " Richard, Michael   "
      },
      {
        "date": " June 11, 2008",
        "text": " I want you all to know, everyone with all my heart, soul, mind and strength. Thank you for being here today to honor Falicia Prechtl, whom I didn't even know. To celebrate my death. My death began on August 2, 1991 and continued when I began to see the beautiful and innocent life that I had taken. I am so terribly sorry. I wish I could die more than once to tell you how sorry I am. I have said in interviews, if you want to hurt me and choke me, that's how terrible I felt before this crime. I am sorry, it is her innocence and her life which began the remorse every since December 1, 1991. I have embraced life. Thank you for being a part of my life. I love you. May God be with us all. May God have mercy on us all. I am ready. Please do not hate anybody because.......(end of statement)  ",
        "name": "Chamberlain, Karl #999241"
      },
      {
        "date": " July 10 , 2008",
        "text": "First of all I would like to tell my Uncle Kyle that I am sorry. I have been sorry for the last 10 years for what I did. I wish you could accept my apology. I know you can't accept my apology, I know you can't give your forgiveness; it's okay and I understand. I have done what I could to heal the rest of the family. I wish that someday you could come to terms and understand. I know I was wrong; I accept responsibility as a man. I take this penalty as a man. This doesn't solve anything, 'cause it hurts others that love me. I am sorry. I love you Kjersti. I love you too Roland. I love you too Uncle Kyle; I am still your nephew, no matter what you believe. ",
        "name": " Turner, Carlton Akee #999321"
      },
      {
        "date": "July 31, 2008",
        "text": " Blessed are they that mourn, for they shall be comforted. It is finished.  ",
        "name": "Davis, Larry"
      },
      {
        "date": "August 5, 2008",
        "text": " I am sorry my actions caused pain. I hope this brings closure to what you seek. Don't ever hate them for what they do. Never harbor hate. I love you. Alright Warden.  ",
        "name": "Jose Ernesto Medellin"
      },
      {
        "date": " August 7, 2008",
        "text": " Jesus receive my spirit. I love you Edgardo; I appreciate your hard work. Thank you. Okay, Receive my spirit. Thanks sir.  ",
        "name": "Heliberto Chi"
      },
      {
        "date": " August 12, 2008",
        "text": " Yeah, I love all ya'll. I forgive all ya'll. See you when you get there. Do what your are going to do.  ",
        "name": "Leon Dorsey"
      },
      {
        "date": " September 5 , 2007  ",
        "text": "Yes sir, I do. Go ahead? First of all I want to thank God for the love; thank God for the love from the family and friends that I have. To God I give the glory though the years. I love and care about the Lord. The Lord knows that I prayed for the victim's family. I know you all probably have bitterness and hate for what I did. There is not a day goes by that I have not prayed for Ronni Dawn Hewitt and Carol Dawson and her daughter who was left behind. I pray to God, the Lord Almighty that like he did for me, he will reach out and help you. I just pray that the Lord takes away your bitterness. There is so much hurt that I have caused you all. On the phone, I talked to my family for two hours. It was hard to see such a big man just break down and cry like a little baby. I hope this will touch your hearts like you have touched mine. I know it is hard for you all. I am to blame for this, I will take that Lord, when I get there. Back in 2003, I want to tell you this. I got down on my knees. The Lord knew my heart. I wanted to kill myself. I spoke to Ms. Ronnie Dawn Hewitt. The next day I received a letter that they had lost a friend to suicide. She said that she forgave me and that was something that I needed to hear. God helped me to forgive myself and move on. I just pray that some day you will find forgiveness in your heart. Know that your loved one is in a good place. I am sorry for what I have done. I cannot agree with this injustice. The Bible says that you shalt not kill, but it also says to obey the government. I am sorry, forgive me. Francis, I love you and thank you for being here. I have no ill will towards anyone carrying out this so called justice. Thank you. I am ready Warden. ",
        "name": "Tony Roach  "
      },
      {
        "date": " August 14, 2008",
        "text": " Yes I do, I know this no way makes up for all the pain and suffering I gave you. I am so so sorry. My punishment is nothing compared to the pain and sorrow I have caused. I hope that someday you can find peace. I am not strong enough to ask for forgiveness because I don't if I am worth. I realize what I've done to you and the pain I've given. Please Lord forgive me. I have done some horrible things. I ask the Lord to please forgive me. I have gained nothing, but just brought sorrow and pain to these wonderful people. I am sorry. So so sorry. To the Sanchez family who showed me love. To the Hawkings' family, I am sorry. I know I have affected them for so long. Please forgive me. Irene, I want to thank you and thank your husband Jack. I'll be waiting for you. I am so sorry. To these families I ask forgiveness. Father God I ask you too for forgiveness. I ask you for forgiveness Lord. I am ready to go Lord. Thank you. I am ready to go. My Jesus my Savior there is none like you. All of my days I want to praise, let every breath. Shout to the Lord let us sing.   ",
        "name": "Michael Rodriguez"
      },
      {
        "date": " October 14, 2008",
        "text": " Yes, I would like to thank God for my salvation and all he has done in my life. I thank my family, loved ones, and friends. I give Him thanks, honor, and glory. I love you Mary Taylor with all my heart, I always have. You are my girl. I love you, Michelle. You are my little kitten. Kevin, it’s all you now. You are my boy. Sylvia, my sister, keep your eyes on Christ, forever. Everything is going to be okay. Angela Christine, keep your eyes on the prize and nothing else. I love all of you. God’s been good. I would like to address the family: I offer my sorrow and my heart goes out to ya’ll. I know you believe that you’re going to have closure tonight and as I stand before God today, the true judge, I had nothing to do with the death of your family. I ask God to hold this. I would like to address the family of John T. Ford: I ask for forgiveness, because I do stand guilty for my involvement for that. Thank you Lord Jesus Christ for coming to my life. (quiet singing) Thank you Lord Jesus for coming into my life, you walked me through prison. Thank you Lord Jesus because you died for me. Thank you Lord Jesus for remembering me... ",
        "name": "Kelly, Alvin"
      },
      {
        "date": " September 17, 2008",
        "text": "First I want to say to the family, I'm sorry I hope you find it in your heart to forgive me. The Lord has forgiven me. All I can say is I'm sorry. God Bless. To my family, I'll be there waiting for ya'll, alright? God Bless.  ",
        "name": "William Murray #999313  "
      },
      {
        "date": " October 16, 2008",
        "text": " Yes. I appreciate everybody for their love and support. You all keep strong, thank you for showing me love and teaching me how to love. Forgive me, Lord. Ya’ll forgive me, remember me. For everybody incarcerated, keep your heads up. For my family, keep your heads up. I never stopped loving ya’ll. Stay strong and keep fighting, it’s not over yet. I love you all. I am out of here. I am gone. Keep me in your hearts. ",
        "name": "Watts, Kevin #999456"
      },
      {
        "date": " October 21, 2008",
        "text": "Laura, I love you, stay strong. Jesus is coming back soon. Danny, something will pull us through. I will see you, keep your head up. For all of you, I am really sorry for what I've done. I wish you could have seen the videotape at the end of trial, so you could know the truth. I pray you find the peace through salvation. As my Lord, King of my life, find salvation through Christ. I hope He heals your heart. The truth is that you are going to feel empty after tonight. Standing with Christ in your heart, He can only give you peace. I pray you can find it, I really do. I love you Laura. I love you Danny. I love you Irene. (singing) Our god is an awesome God. Lord, I lift your name on high. ",
        "name": "Ries, Joseph Ray"
      },
      {
        "date": " October 30, 2008",
        "text": "Yes I do. There has been a lot of confusion on who done this. I know you all want closure. Donna had her Christianity in tact when she died. She never went to a drug house. John Adams lied. He went to the police and told them a story. He made deals and sold stuff to keep from going to prison. I left the house, and I left him there. My only act or involvement was not telling on him. John Adams is the one that killed Donna Vick. I took a polygraph and passed. John Adams never volunteered to take one. I have done everything in my power. Donna Vick helped me; she took me off the street. I was a truck driver; my CDL was still active. Donna gave me everything I could ask for. I helped her around the yard. I helped her around the house. She asked if there were anyone else to help. I am a Christian myself, so I told her about John Adam. We picked him up at a dope house. I did not know he was a career criminal. When we got to the house he was jonesin for drugs. He has to go to Dallas. I was in the bathroom when he attacked. I am deaf in one ear and I thought the T.V. was up too loud. I ran in to the bedroom. By the time I came in, when I tried to help her, with first aid, it was too late. The veins were cut on her throat. He stabbed her in her heart, and that's what killed her. I told John Adams, \"turn yourself in or hit the high road.\" I owed him a favor because he pulled someone off my back. I was in a fight downtown. Two or three days later he turned on me. I have done everything to prove my innocence. Before you is an innocent man. I love my famly. I'll be waiting on ya'll. I'm finished talking. ",
        "name": "Gregory Wright #999253"
      },
      {
        "date": " November 6, 2008",
        "text": " Hello, ain't got to worry about nothing. I am going home. I hope to see all of ya'll one day. Lord have mercy on my soul. For the Flake family, stay strong. It's bad to see a man get murdered for something he didn't do, but I am taking it like a man, like a warrior. I am going home to Jesus. I love ya'll, peace. Iam ready sir... Don't forget to tell my daughter,,, I am ready, Warden. ",
        "name": " Elkie Taylor #999112"
      },
      {
        "date": " November 13, 2008",
        "text": " Yes. From Allah we came and to Allah we shall return. I would like to give thanks for the unjust way my trial attorneys John Donahue and Frank Hollbrook purposely denied me a fair trial. I would like to thank Walter E. Reeves for bringing up claims that did not exist. Most importantly, I would like to thank John Hurley, who was suppose to be off my case but was granted to be back on. For those who kept agreeing with me, keep it real. Ya'll will always stay real in my heart. Barbara, I love you, Al and Paul, I love you. Jess and Chong, I love you now and forever. I am ready for the transition.  ",
        "name": "Manns, Denard   "
      },
      {
        "date": "November 20, 2008",
        "text": "I love you all. You have been there for me through this whole thing. Take comfort in each other, I love you all. I will take you to Heaven with me. I will always be with you. I love you, Chantal. I love you, Zena. Tell Robin I love her, she is my one and only. She is a beautiful child. I will pray with this man down here and we will go: Our Father, who art in Heaven, hallowed by thy name. Thy kingdom come, thy will be done, on Earth as it is in Heaven. Give us this day our daily bread and forgive us our tresspasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. For thine is the kingdom, and the power, and the glory forever. And ever, Amen. I love you Chantal I love you baby. I am yours, and we are one. Let's go, Warden.  ",
        "name": "Robert Hudson   "
      },
      {
        "date": " January 14, 2009   ",
        "text": "Yes, Sir. I love you Irene and I want to thank you for all the beautiful years of friendship and ministry. I love you.  ",
        "name": "Curtis Moore   "
      },
      {
        "date": " January 22, 2009",
        "text": "I already gave my statement. (talked to family) Love you all, take care. Bobby Nell Love ya.  ",
        "name": " Reginald Perkins #999407   "
      },
      {
        "date": "January 21, 2009",
        "text": " I would like to say that Capital self defense is not Capital Murder. I would like to make a statement to my wife and family, thank you for your support. I love you Roxanne, Kaye. Thank you Saint Gabriel's Church. Sylvia I appreciate you and thank you. All right Warden. (After the official last statement ended, he said I love you Mom.)  ",
        "name": "Frank Moore"
      },
      {
        "date": " November 12, 2008",
        "text": "First off I'd like to say to Mr. and Mrs. Carrier, I apologize for your pain and suffering. I pray Lord, please forgive me. To my family, to my brother Gerard, I love you, Harold, I love you. To my step father Paul, I love you. Momma, I will always love you. Take care of my daughters, Kaneisha and Ieisha. Dad loves you. Continue to pray for me, I am fine. I have made peace with God. Please don't ever forget me. I love you mom. I love you all, take care. I love you too pop, keep your head up. Take care. I am going to sleep. ",
        "name": "George Whitaker III   "
      },
      {
        "date": "February 10, 2009",
        "text": "Is the mic on? My only statement is that no cases have ever tried have been error free. Those are my words. No cases are error free. You may proceed Warden. ",
        "name": "Scheanette, Dale Devon"
      },
      {
        "date": "02/12/2009  ",
        "text": " The Polunsky dungeon should be compared with the Death Row Community as existing not living. Why do I say this, the Death Row is full of isolated hearts and suppressed minds. We are filled with love looking for affection and a way to understand. I am a Death Row resident of the Polunsky dungeon. Why does my heart ache. We want pleasure love and satisfaction. It. The walls of darkness crushed in on me. Life without meaning is life without purpose. But the solace within the Polunsky dungeon, the unforgivesness within society, the church Pastors and Christians. It is terrifying. Does anyone care or who I am. Can you feel me people. The Polunsky dungeon is what I call the pit of hopelessness. The terrfying thing is the US is the only place, country that is the only civilized country that is free that says it will stop murder and enable justice. I ask each of you to lift up your voices to demand an end to the Death Penalty. If we live, we live to the Lord. If we die we die to the Lord. Christ rose again, in Jesus name. Bye Aunt Helen, Luise, Joanna and to all the rest of yall. You may proceed Warden. (began singing)  ",
        "name": "Johnson, Johnny"
      },
      {
        "date": " March 3, 2009",
        "text": " Well, first I want to say. They may execute me but they can't punish me because they can't execute an innocent man. I am not mad. Jack Herrington, I am not mad. You were given a job to do but that's neither here nor there. I am not mad. I am disappointed by the courts. I feel like I was upset and let down by them. But that's O.K. I just played the hand that life dealt me. Look at my life and learn from it. I am very remorseful about what I did. I apologize. To my kids, Daddy loves you. Irene Wilcox, Thank you. It's been a long journey. Thank you for being there. Tell Jack hello. I know I am wrong but I am asking ya'll to forgive me.  ",
        "name": " Pondexter, Willie"
      },
      {
        "date": " January 28, 2009",
        "text": " Yes I do. Um Abel, Love ya'll, Evelyn love ya'll, Armando and Delia I love ya'll. Do what I told you and you will see me one day. Do that and promise me. First, Veronica's sister. I know what you've been told and that's all a lie. John Gomez killed your kids and sister. I know ya'll love John Gomez but he was a violent man. I wish I would have shot him in the leg, then he would be here. Those investigators were just trying to convict somebody. My gun had a hair trigger. Veronica told me to come and get my herb book and she went to the back of the closet. Her kids had asthma and I lent her the book. She said she would give it to me next time. She didn't want to break up, we still talked. She told me to come over. John Gomez said Veronica does not have the money for your book so don't come over. Me being a hot shot I went over there and I had my gun. I had children and nephews where I lived so I had to keep my gun in my truck for self defense. Veronica invited me in her house, the kids were still awake fixing to go to bed. I put the gun under my shirt and said Hi to Josh and Cassandra. John Gomez was there he told Veronica that \"he doesn't love you\" I didn't care.  ",
        "name": "Martinez, Virgil Euristi"
      },
      {
        "date": " March 10, 2009   ",
        "text": "Yes sir, I want to tell my mom that I love her and thank her for everything that she has done for me. Tell my sister that I love her too thank her for everything that she has done for me. I hope you can move on after this. I'll be fine. I'll be O.K. I love you too. I love you too. Take care O.K. That's all I have to say Warden. Thank you sir.  ",
        "name": "Martinez, James Edward"
      },
      {
        "date": " March 11, 2009   ",
        "text": " Yes, I do. Thank you for your friendship Reverend Whiteside and thank you for your fellowship. God help me to say this statement correctly. I would like to say goodbye to mom and my brother, brother, sister, Chelsea, Danny, Johnny, Tito and Sylvia. My heart goes is going ba bump ba bump ba bump. I love my children, Roxanne, Roseanne, Melissa, and Louis. I miss them; I will take them with me in my heart. I will keep them in my heart. Thank you Mrs. Dyson for praying for me and everyone that has been praying for me. God loves everybody and myself. I can't say this correctly. Let's see. That's all right. I guess that's it. Our Father, who art in heaven, Hallowed by thy Name. Thy kingdom come. Thy will be done, On earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, As we forgive those who trespass against us. And lead us not into temptation, But deliver us from evil. For thine is the kingdom, and the power, and the glory, for ever and ever. Amen. Lord Jesus forgive of my sins, please forgive me for the sins that I can remember. ",
        "name": " Salazar, Luis Cervantes   "
      },
      {
        "date": "April 30, 2009",
        "text": "Don't cry, it's my situation. I got it. Hold tight, It's going to shine on the golden child. Hold tight. I love you , I'm through with my statement.  ",
        "name": " Johnson, Derrick     "
      },
      {
        "date": " March 4, 2009",
        "text": " Yes, I have to say that I am sorry for all the pain that I have caused you and your family. I only have love in my heart. I hope that you can all forgive me. I pray that you can all forgive me. Thank you for standing by me and being there for me. I am ready to go home. My baby I will always be with you. I really am sorry.  ",
        "name": "Morris, Kenneth Wayne   "
      },
      {
        "date": "June 2, 2009   ",
        "text": "Yes, I am sorry for what I've done and for all of the pain and suffering that my actions have caused. Jesus is Lord. All glory to God.  ",
        "name": "Hankins, Terry Lee   "
      },
      {
        "date": " April 15, 2009",
        "text": "No, I love you. May the Lord be with you. Peace, I'm done. ",
        "name": " Rosales, Michael"
      },
      {
        "date": "October 27, 2009",
        "text": "Yes I do. I know ya'lls pain, believe me I shed plenty of tears behind Carlos. Carlos was my friend. I didn't murder him. This what is happening right now is an injustice. This doesn't solve anything. This will not bring back Carlos. Ya'll fought real hard here to prove my innocence. This is only the beginning. I love each and everyone dearly. Dre My queen. I love you. Yaws, Junie I love yall. Stay strong, continue to fight. They are fixing to pump my veins with a lethal drug the American Veterinary Association won't even allow to be used on dogs. I say I am worse off than a dog. They want to kill me for this; I am not the man that did this. Fight on. I will see ya'll again. That's all I can say.  ",
        "name": "Blanton, Reginald   "
      },
      {
        "date": " September 22, 2009",
        "text": "Yes, Ain't no way fo' fo', I Love all yall.  ",
        "name": "Coleman, Christopher   "
      },
      {
        "date": " May 19, 2009",
        "text": "Yes I do. To the Harris family. I have been trying to tell you for years that I am sorry. I know that I hurt your family bad. I am sorry. Wynona should not of even have happened. I am sorry. I truly am sorry for the hurt and pain I caused you. I hope you can forgive me. One day I hope you can move on and if not I understand. Tim Jackson, Bobby Dan Spade and Mr. Segal thank you for your lies. Your lies set me free. I couldn't do a life sentence. To my mom, I'm sorry. I love you. I'm not the big son that you wanted me to be. But, I love you. To my friends, Synnova, Kay I thank you for everything. I'm ready. I told you years ago that I was ready. Synnova tell everyone I got full on Chicken and Pork Chops. Rodney, take care of my mom. To the fellas on the row, stay strong. Renee, I love you baby. Fleetwood is up out of here. I'm ready Warden. ",
        "name": " Riley, Michael"
      },
      {
        "date": "November 5, 2009   ",
        "text": "Collins family, I know your not going to get the closure you are looking for tonight. I wish you the best. I prayed for ya'll every day and every night. I have only the warmest wishes. I am sorry for what you are having to go through. Mom, Pa, Kristy, Khristopher, Tony I love all ya'll. Thank you Mr. Whiteside. The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures; He leadeth me beside the still waters. He restoreth my soul; He guides me down the right paths. Yea, though I walk through the valley of the shadow of death, I will fear no evil; for thou art with me. Thou preparest a table before me in the presence of mine enemies; Thou anointest my head with oil; my cup over runneth. ",
        "name": "Oliver, Khristian   "
      },
      {
        "date": "November 18, 2009   ",
        "text": " Yeah, I want to tell my family I love ya'll. Tell Kate I love her too. Tell brother, my kids I live ya'll. I'm gonna miss ya'll. I'm ready, ready. ",
        "name": "Simpson, Danielle   "
      },
      {
        "date": " December 3, 2009   ",
        "text": " Bye, I'm Ready. ",
        "name": "Woods, Bobby Wayne   "
      },
      {
        "date": " January 12, 2010   ",
        "text": "Tell my family goodbye. I can't see them. Jenny, you keep your promise to me, O.K.? Dell, you take care of Gaylene always. Dixie watch over all the kids. Tell them thank you for coming down. Jennie talk to them O.K.? Talk to Jennie, O.K. Dell. Dell you tell the rest of them what they did was wrong for letting me fall for what they did. I never done anything in my life to anybody.  ",
        "name": "Johnson, Gary   "
      },
      {
        "date": " September 16, 2009",
        "text": " Yes sir, to Joseph's mom and son. I was unable to respond to you in the courtroom. I can only ask that you have the peace that I do. To my brother, you are a good brother. You're the best. And I love you. Can't beat ya. The beautiful lady standing next to you. Kathy you are next to my heart. Amber I love you. Warden, pull the trigger. I love you brother never forget it. Ronnie, Linda, Amber, Kathy. Chaplain Hart you're the best. Love you Thomas.  ",
        "name": "Stephen Moody #999076"
      },
      {
        "date": " March 11, 2010",
        "text": " I do, I want to address you, I am sorry. I don't know who you are. I am sorry I put you through some things that I can't take back. I am sorry. This isn't going to change anything. Sorry for putting you through this. This is creating more victims. I am sorry, I put you through this. I love you man, I love you. This is not gonna change anything. This person shoe did that 10 years ago isn't the same person you see today. I hurt a lot of people with decisions I made. I can't be more sorry than I am right now. I hurt the Lopes family, let this be a lesson. Your decisions affect everybody. Look after your sister for me. I am always gonna be with you. I love you too Shay I love you if your listening I am sorry to be putting everybody through this. This is the end of this, time to move on. I hope this brings you peace, I am sorry. I told your sister my last words. Danielle, you know that I love you. You know that you have my heart, I've enjoyed these times. I love you little hef.  ",
        "name": "Maxwell, Joshua "
      },
      {
        "date": " November 19, 2009",
        "text": "Yes, I bear witness that there is no God, but Allah. From Allah we came and from Allah we will return. To my mother, friends I would like to thank you for all that you have done for me. For you love. This is another testimony of faith. We all have to walk this path. Smile, be happy don't cry. To the family of any victims, AsSalaam Alaikum, unto Allah I belong, unto Allah we return. I just want you to know that I never meant any of your family to get hurt. I hope you forgive me. I know Allah will forgive me, Allah is the forgiver. Go ahead Warden. I love you, love you too. ",
        "name": "Thompson, Robert Lee"
      },
      {
        "date": "March 30, 2010",
        "text": "Yes I do, I would like to thank my family for their support, love and understanding. I would like to point out some things, I got your letter. It touched me and changed me. What happened was I been wanting to apologize to yall for your son. They told me not to do it in court. I wrote him a letter but they told me that they tore it up in court. I am not the monster they made me out to be. I made lots of mistakes that took your son. I'll take it to the grave, I will be at peace. You have test and drug results to show it. I am not just taking. I messed up, made poor choices. No rapes, I don't do drugs, I am not an alcoholic. Back to my family, Thank yall for being here. It is what it is. I got peace in my heart. Thank you. Bye bye yall. Bye bye peanut.  ",
        "name": "Alix, Franklin DeWayne"
      },
      {
        "date": "April 22, 2010   ",
        "text": "Samantha, I love you with all my heart and soul. Cori, thanks for everything, make sure my princess is all right. Death before dishonor. Cori, I think you should continue with criminal law. It’s your decision; they need lawyers out there that will fight. Death before dishonor. Warden let her rip. Thank you for coming Irene.  ",
        "name": "William Josef Berkley   "
      },
      {
        "date": "May 12, 2010   ",
        "text": "I am going to start with the victim's family. I know I took someone very precious to you. Myself and Mr. Galloway who you will see tomorrow. Please forgive me. God has given me peace. I love each and every one of you. You have to forgive me for you to gain the kingdom of Heaven. I wish what was torn from you was not. I do know how it feels to have lost loved ones. This was the only way God could save me; I would pay it back a thousand times to bring back your loved ones. I would pay it gladly. I love each and every one of you and hope you can find forgiveness for me. I don't require your forgiveness, because God has forgiven me. Sorry, I hope you find peace. God's love is infinite. If you hate me, please give it up. I forgive you and I hope you can forgive me. Mom, you are my strength. Kathy we've had some good memories, you are still the monkey. Mom, this is nothing, I am going to go to sleep and wake up with Jesus. This is the only way God could save me. Stefanie, she is my heart, say goodbye to Stefanie. I do not want anybody to mourn my death, celebrate my life. God loves me and God loves you. Mom, you didn't do anything wrong. Thank you, Warden, Thank you Chaplain, Thank you God, I am ready to go. God please take me home. I am ready Warden. Thank you Jesus. I am going mom. ",
        "name": "Kevin Scott Varga #999368   "
      },
      {
        "date": " November 10, 2009",
        "text": " I am sorry, I never wanted to kill your family. I never wanted to kill your family or these people. I am sorry for the way I talk in English. I did it to myself. I was forced to do it. I was a gang member. I never wanted to kill your brother. I was forced to do this. I blame myself. I am not going to blame nobody. I got my mother and my family too. I was forced. I tell you from my heart. I am sorry with all my heart. That's the reality of life, I am sorry. I got to pay for it. To my family, I love you, be strong. They have family too; the way they suffer is the way I am suffering. I am asking you to go and give them hugs. Please accept their hugs. Be strong in the Lord. I love you sister. I love you all, please go and try and talk to the family. I love my family. I understand why I am paying this price. Do not have any excuses for not extending your love. I am ready Warden, I am sorry everybody, I did it. Thank you brother, don't hate nobody, I feel good. I love my family, I love you Jesus. Be strong mama, I love you sister. I love Jesus. Warden I am ready. ",
        "name": "Valle, Yosvanis"
      },
      {
        "date": "May 19, 2010   ",
        "text": "Yes, I do, Victor, Gary Hey bros, I know you can hear me, I can't hear you. I was in there right now thinking how we grew up... You know how we grew up in the same house. We need to love each other like we use to. Deena, Bob we were raised in the same house, we need to take care of each other and love each other like we use to. Adela I love you, Mijta, I need you to take care of your mom. We need to love each other like we use to. Juana, all the kindness that you showed me. Taking the time to show me the friendship that you did. I can never repay that. Take of yourself OK; you see I am doing good. I am OK. Thank you for showing me that I can be loved again. You showed me a love that I sometimes didn't deserve. I love you for that. You need to take care of yourself. I am going to be OK; I know where I'll be. I love you, I love you, I love you, I love you , I love you, I love you too bro. Take care of yall. May God have mercy on my soul. I thought it was going to be harder than this. I am ready to go. I am going to sleep now. I can feel it, it's affecting me now.  ",
        "name": "Rogelio Cannady #999245   "
      },
      {
        "date": " March 2, 2010",
        "text": " Yes sir, I would like to ask forgiveness of the family. I have no reason for why I did it, I don't understand why I did it. I hope that you can live the rest of your lives without hate. I pray the Lord grant me forgiveness. All powerful and almighty Lord I commit myself to thee, Amen. ",
        "name": "Michael Adam Sigala, #999397"
      },
      {
        "date": "July 1, 2010",
        "text": "Yes, I want to start off by saying to everyone know that's involved in this atrocity that they are all forgiven by me. Mom, I love you.....(crying) I am ready to go Warden. Coming home dad, coming home dad.  ",
        "name": "Michael Perry, 999444 "
      },
      {
        "date": "July 20, 2010",
        "text": "No last statement.",
        "name": "Derrick Leon Jackson, TDCJ #999263"
      },
      {
        "date": "August 17, 2010",
        "text": "No",
        "name": "Peter Cantu"
      },
      {
        "date": "May 25, 2010   ",
        "text": "Yes, first I want to tell the victim's family, Wendy's family, I am sorry for taking something so precious to you and to my kids. I wish I could take it all back and change it, but I know I can't. I hope you can find it in your heart to forgive me. Please tell Robert and Eric, I love them. I hope they forgive me. To my family, thanks for being beside me, Sabrina, you are a wonderful daughter, I am proud of you. Jr., John, you turned out to be a great young man. Hector, you too. Amy, thank you for always being there. Tell your family I love them. To my family, I appreciate you always standing by me and everything ya'll have done. Tell, everyone I love them. I'll be OK. You will too. Remember what asked you. Give my love to the grandchildren. Tell Jake and Mia, Papa Alba loves them. Okay Warden, let's do it, I love yall. I can taste it already. I am starting to go.  ",
        "name": "John Alba # 999027   "
      },
      {
        "date": "June 2, 2010   ",
        "text": "Yes, I do, uh at this time I would like to thank my parents who have been my pillar of strength throughout this. To my brothers and sisters and all my family members who have supported me and who have loved me despite my faults and imperfections. I would like to thank Pastor Williams for counseling me and guiding me. As I look to my right and I see the family of Forest Hall. I hope this brings you closure or some type of peace. I hope it helps his family, son and loved ones. This has been a long journey, one of enlightenment. It's not the end, it's only the beginning.  ",
        "name": "George Jones #999147   "
      },
      {
        "date": "October 21, 2010",
        "text": "No sir. Warden, Since I don't have nothing to say, you can go ahead and send me to my Heavenly Father.",
        "name": "Wooten, Larry"
      },
      {
        "date": "February 15, 2011 ",
        "text": "First of all I would like to give my sincere   apology to Amy's family. We caused a lot of heartache, grief, pain and   suffering, and I am sorry. I know it won't bring her back. I would like   to sing, I would like to sing for that person's dead. The old is gone. I   am not the same person that I used to be, that person is dead. It's up   to you if you would find it in your heart to forgive.",
        "name": "Michael Wayne Hall, TDCJ #999346 "
      },
      {
        "date": "May 13, 2010   ",
        "text": "If I can go back and change the past I would, there's nothing I can do. I'm sorry. I love you Adonya. That's it.  ",
        "name": "Billy John Galloway #999349   "
      },
      {
        "date": "May 3, 2011",
        "text": "Yes, Tell my sister Tracey, I love you. Nicole, thank you and I love you. Wanda and all of my friends, I love you and thank you for your support. To the State of Texas, I am an innocent man. Never trust a court-appointed attorney. I am ready Warden. Thank you, Brad, I'm sorry. Check that DNA, check Scott. Here we go. Lord Jesus, Jesus.",
        "name": "Cary D. Kerr, TDCJ #999449"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "June 16, 2011",
        "text": "Yes, sir. Jennifer, I love you. Mom, I love you. Rick, take care of you. For all of you people, I defended myself when I killed your family member. Prison is a bad place. There was eight against me. I didn't set out to kill him. I am sorry that I killed him, but he would not have been in prison if he was a saint. I hope ya'll understand that. I love you, baby.",
        "name": "Lee Taylor, TDCJ #999344"
      },
      {
        "date": "June 21, 2011",
        "text": "Yes, sir. I just want to say to all my supporters, family and friends; I love y'all and appreciate y'all. To the ones representing me today, thank you for everything. The system has failed me. This is a miscarriage of justice. There are people on death row that need help. I love my family. I love you too, Mom. I am alright. I asked the Lord to have mercy on me and I hope He has mercy on these people carrying out this mass slaughter. They have no respect for humanity.  To Melanie, I never meant to hurt you. You were just in the wrong place at the wrong time. I am not asking for your forgiveness. All I have to worry about is God forgiving me. I hope you get better and for the doctors to continue to take care of you. Take care of my mother for me. To everybody, know that I love you and I am OK. Lord, have mercy on my soul. Lord, have mercy on my soul. Lord, have mercy on these peoples' soul. Life is not supposed to end this way. No more pain and frustration. When I knock at the gates, they will open up and let me in. To my mom and everybody, I love you. I can feel it right now. My life, my life.",
        "name": "Milton Mathis, TDCJ #999337"
      },
      {
        "date": "July 20, 2011",
        "text": "Even though I lay on this gurney, seconds away from my death, I am at total peace. May the Lord Jesus Christ be with me. I am at peace. Hate is going on in this world and it has to stop. Hate causes a lifetime of pain. Even though I lay here I am still at peace. I am still a proud American, Texas loud, Texas proud. God bless America, God bless everyone. Let's do this damn thing. Director Hazelwood, thank you very much. Thank you everyone. Spark, I love you, all of you. I love you Conna. It's all good, it's been a great honor. I feel it; I am going to sleep now. Goodnight, 1, 2 there it goes.",
        "name": "Mark Stroman, TDCJ #999409"
      },
      {
        "date": "August 10, 2011",
        "text": "I love you Israel. ",
        "name": "Martin Robles, #999457"
      },
      {
        "date": "September 21, 2011",
        "text": "No, I have no final statement. ",
        "name": "Lawrence Russell Brewer #999327"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "January 26, 2012 ",
        "text": "Yes, I want to tell everybody that I love everybody. Keep your heads up. We are all family, people of God Almighty. We're all good. I'm ready. ",
        "name": "Rodrigo Hernandez, #999474"
      },
      {
        "date": "November 16, 2011",
        "text": "To the family of Alyssa Vazquez, I hope you will find peace in your heart. My sympathy goes out to you. I hope you find it in your heart to forgive me. I don't know why all of this happened.",
        "name": "Guadalupe Esparza, #999385"
      },
      {
        "date": "September 13 , 2011",
        "text": "You're not about to witness an execution, you are about to witness a murder. I am strapped down for something Marcus Rhodes did. I never killed anybody, ever. I love you, Mom. I love you, Tali. This is wrong. This whole thing is wrong. I can't believe you are going to let Marcus Rhodes walk around free. Justice has let me down. Somebody completely screwed this up. I love you too, Mom. Well Warden, if you are going to murder someone, go ahead and do it. Pull the trigger. It's coming. I can feel it coming. Goodbye.",
        "name": "Steven Woods, #999427"
      },
      {
        "date": "February 29, 2012 ",
        "text": "Yes, I do. First of all for the Aubrey Hawkins family, I do apologize for everything that happened. Not because I am here, but for closure in your hearts. I really believe that you deserve that. To my wife, Cheri, I am so grateful you're in my life. I love you so dearly. Thank you to my sister and dear friend Katherine Cox, my son and family, friends and family. I love you so dearly. To my friends, all the guys on the row, you have my courtesy and respect. Thank you to the people involved and to the courtesy of the officers. I am grateful for everything in my life. To my wife, take care of yourself. I will be waiting for you. I love you. God Bless. I am ready to go. ",
        "name": "George Rivas, #999394"
      },
      {
        "date": "March 7, 2012  ",
        "text": "All I want to say is I'm innocent, I didn't kill my wife. Jack Leary shot my wife then her dope dealer Guy Fernandez. Don't hold it against me, Bill. I swear to God I didn't kill her. Go ahead and finish it off. You can taste it. ",
        "name": "Keith Thurmond, #999435"
      },
      {
        "date": "July 7, 2011",
        "text": "I am sorry for everything that I have done. I've hurt a lot of people. For years I have never thought that I deserved any type of forgiveness. Lord Jesus Christ in my life, I know He has forgiven me, I have accepted His forgiveness. I have accepted everything. Let this be final and be done. I take the full blame for this. I am sorry and forgive me. I am truly sorry. I ask for forgiveness. Life goes on and it surely does. I am sorry for the victim's family for what I had did. May they forgive me. I don't know if you believe me, life goes on. I am sure it does. To the man to the right of me, I ask for forgiveness for you. Life goes on, it surely does. I ask for forgiveness. I am truly sorry. That is all. Let's get this show on the road. One more thing, Viva Mexico, Viva Mexico.",
        "name": "Humberto Leal, TDCJ #999162"
      },
      {
        "date": "March 28, 2012  ",
        "text": "Tell my son I love him very much. God bless everybody. Continue to walk with God. Go Cowboys! Love ya'll man. Don't forget the T-ball. Ms. Mary, thank you for everything that you've done. You too, Brad, thank you. I can feel it, taste it, not bad.",
        "name": "Jesse Hernandez, #999425"
      },
      {
        "date": "April 26, 2012  ",
        "text": "First, I want to let my mom know not to cry, there is no reason to cry, everybody dies. Everybody has their time, don't worry about me. I'm strong. To my family: my old man, my kids, daddy is sorry. I love each and every one of you. I'll be looking for you. To my wife, I love you. The last two years have been the best. All my kids, mom, nieces, and nephews, I am proud of all of ya'll. I love each and every one of ya'll. I really love ya'll.",
        "name": "Beunka Adams, #999486"
      },
      {
        "date": "July 18, 2012  ",
        "text": "Yes, I would like to tell my family that I love ya'll and I wish ya'll well. I'm ready. ",
        "name": "Yokamon Hearn, #999292"
      },
      {
        "date": "August 7, 2012  ",
        "text": "Bohannon, Peg and Kim, I love ya'll. Son, get your life right with Christ, also your mother. Give mom a hug for me and tell her that I love her. Ya'll do understand that I came here a sinner and leaving a saint. Take me home Jesus, take me home Lord, take me home Lord. I ain't left yet, must be a miracle. I am a miracle. I see you, Rich. Don't cry son, don't cry baby. I love ya'll. I'm ready. ",
        "name": "Marvin Wilson, #999098"
      },
      {
        "date": "September 20, 2012  ",
        "text": "I want to tell ya'll, know that I love you. Billy, I love you, English, Hart and Eloise. Dwight, take care of Dwight. I'm going home, I'm going home. I'll be alright, don't worry.  I love ya'll. God bless and the Texas Rangers, Texas Rangers. ",
        "name": "Robert Wayne Harris, #999364"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "October 31, 2012  ",
        "text": "To all of ya'll over here: Mr. Bivins, Allen, Joey, all of ya'll back there, I am truly sorry. I never meant to cause ya'll so much pain. Not one day has passed that I wish I could take it back. After today, I hope you can go on. I hope this brings you closure. God knows I didn't want to do what I did. I loved your daughter. I hope to God, He lets me see her in Heaven so I can apologize to her. I'm sorry. I'm glad ya'll came. Joey, I am really sorry, Joe.",
        "name": "Donnie Lee Roberts, Jr., #999487 "
      },
      {
        "date": "November 8, 2012 ",
        "text": "This offender declined to make a last statement.  ",
        "name": "Mario Swain, #999475"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "April 9, 2013    ",
        "text": "Ms. Connie Hilton, I'm sorry for what happened to you. If I hadn't raped you, then you wouldn't have lived. If you look at the transcripts, I didn't kill Mr. Newman and I didn't rob your house. There are two people still alive. I was just there. When I saw you in the truck driving away, I could have killed you but I didn't. I'm not a killer. My momma was abused. I'm sorry for what you've gone through. It wasn't me that harmed and stole all of your stuff. If you look at the transcripts you will see. I ask the good Lord to forgive me.",
        "name": "Ricky Lynn Lewis, #999097  "
      },
      {
        "date": "November 14, 2012  ",
        "text": "Can you hear me? Did I ever tell you, you have dad's eyes? I've noticed that in the last couple of days. I'm sorry for putting you through all this. Tell everyone I love them. It was good seeing the kids. I love them all; tell mom, everybody. I am very sorry for all of the pain. Tell Brenda I love her. To everybody back on the row, I know you're going through a lot over there. Keep fighting, don't give up everybody.",
        "name": "Ramon Torres Hernandez, #999431 "
      },
      {
        "date": "April 16, 2013    ",
        "text": "To my loved ones and dear friends, I love ya'll and appreciate ya'll for being there. I am going to a better place. To all the guys back on the row, keep your heads up, keep up the fight. I am ready. Let's go.",
        "name": "Ronnie Threadgill, #999424  "
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "September 25, 2012  ",
        "text": "Yes, you know I sat in my cell many days wondering what my last words would be: love for my family, grandson, friends. I love you very much. Tonight when I close my eyes, I'll be with my Father. Some time ago I got a letter, I read it, and stuck it in with a bunch of stuff; and I thought to myself, what a cold-hearted person. I was asked about the letter, I spent half the night looking for the letter. A little part of the letter touched me. Over the years I have learned to love. God is everything. God is my life. Tonight, I will be with Him. I am a parent myself.  I have so much for this dear lady. I understand where they're coming from, I thought every person was cruel. I love you so, Susan. You know what it is girl, love ya. Maurie, appreciate it girl. Much love to you all. Mrs. Cox, love you. Momma, you are my hero. I wish this world was just like you. Another mother got hurt, as a parent I understand the pain. That letter she wrote wasn't wrong, she was just hurting. She showed God's love for letting me know that love will be there to welcome me home. I love you all. I don't know what you are going to feel after tonight. I love you. I pray one day we will all meet in heaven. A man told me 11 years ago the hardest thing to say is, \"I forgive you.\" Hope one day we all be together again. I love you all: Susan, Mrs. Cox, momma, Maurie, Michael. Grandbabies make the world go around. I love you all. Warden, I am looking to leave this place on wings of a homesick angel. Ready to go home to meet my maker. What a friend we have in Jesus, oh my God, I lay in awe 'cause I love you God. I love you momma. I love you Susan. ",
        "name": "Cleve Foster, #999470"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "May 15, 2013",
        "text": "You clown police. You gonna stop with all that killing all these kids. You're gonna stop killing innocent kids, murdering young kids. When I kill one or pop one, ya'll want to kill me. God has a plan for everything. You hear? I love everyone that loves me. I ain't got no love for anyone that don't love me.",
        "name": "Jeffrey D. Williams, #999350"
      },
      {
        "date": "June 26, 2013    ",
        "text": "I just wanted to say thanks to all who have supported me over the years: Reverend Campbell, for my spiritual guidance; Aaron, the father of Darrian, my son; and Maurie, my attorney. Thank you everybody. This is not a loss, this is a win. You know where I am going. I am going home to be with Jesus. Keep the faith. I love ya'll. Thank you, Chaplain. ",
        "name": "Kimberly McCarthy, #999287 "
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "October 24, 2012  ",
        "text": "To the victim's family, I am sure I know that I took somebody special from ya'll. I know it wasn't right, it was wrong. I wish I could give it back, but I know I can't. If giving my life in return makes it right, so be it. I ask that ya'll forgive me. I know God forgave me. I know He has forgiven me for what I did. I don't believe that taking my life will solve anything. I believe that if I was locked up for the rest of my life, that would be more of a punishment. To do this is setting me free. God bless ya'll. I wish there was something I could do.",
        "name": "Bobby Lee Hines, #999025 "
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "October 9, 2013    ",
        "text": "I love you. To Gerald: you're a zero. I love you Mandy, Tiffany. I love you, too. ",
        "name": "Michael Yowell, #999334 "
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "November 15, 2012  ",
        "text": "Yes, Warden. Mom, Celeste: Please know I'm innocent and I love you both. Please continue to fight for my innocence even though I'm gone. John, Cort, Allen, Barbara, Louis, and Anna: Thank you for helping me and trying to save my life. I love you. Give everybody my love. Jason, thank you for your friendship. Thank Laura, too. I love all of you. Bye. Ok, Warden.",
        "name": "Preston Hughes, #939 "
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "January 22, 2014  ",
        "text": "This offender declined to make a last statement.  ",
        "name": "Edgar Tamayo, #999130"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "July 18, 2013    ",
        "text": "Yes, I want to thank my family for supporting me through this. I love ya'll. I don't fear death. I'm fine, I'm OK. To my friends and my loved ones, Miriam, I love you, thanks for being here for me. This is what it is. I know this is hard for ya'll, but we are going to have to go through it. We know the lies they told in court. We know it's not true. I want you to be strong and keep going. ",
        "name": "Vaughn Ross, #999429 "
      },
      {
        "date": "April 9, 2014  ",
        "text": "Yes, sir. First I would like to thank God for letting me see my family. I say this with love, I'm sorry. I say this for my family with love and with God, I love you. I'm happy, and I would like to say on behalf of my family, I love y'all. I am happy. I look into my family's eyes, and I see sadness. Don't be sad, I'm happy. I am sorry for what I have done. Be mindful that I am happy till the end. To the family of my boss, I love you. Young people, listen to your parents; always do what they tell you to do, go to school, learn from your mistakes. Be careful before you sign anything with your name. Never, despite what other people say. God is with y'all. God is the only witness that knows what happened that night. I, Ramiro Hernandez, say this with lots of love to young people, listen to your parents please. Live your life to the fullest, you only live your life once. To the prison system, I would like to thank y'all. Thanks to the officers and to the warden that are going to witness this. I say this with a lot of love and happiness. I have no pain and no guilt. All I have is love. Love will win. Thank you God, I am going with you. ",
        "name": "Ramiro Hernandez, #999342"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "September 10, 2014  ",
        "text": "Nesha, I love you. I hope this brings you some closure. Titus, if his kids are out there, I'm sorry for your dad. Shan, Charlotte, Baisey, I love you. T.T., I love you. Stay strong.",
        "name": "Willie Trottie, #999085"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "Date of Execution:",
        "text": "Last Statement:",
        "name": "Offender:"
      },
      {
        "date": "January 29, 2015 ",
        "text": "Joanna I really love and care about her, I appreciate  her.  There is a drawing that I forgot to tell you about, send it to  Stacy.  Art, I appreciate you.  Joanna, tell my family I love them  all.  Trix I love you too.  ",
        "name": "Robert Ladd  #999237"
      },
      {
        "date": "February 4, 2015 ",
        "text": "That each new indignity defeats only the body. Pampering the spirit with obscure merit. I love you all, that's it. ",
        "name": "Donald Newbury  #999403"
      },
      {
        "date": "March 11, 2015",
        "text": "Yes sir, I want to say I love you to all my family and friends. Thank you Lord for your mercy and unconditional love. In Jesus name I pray, Amen.",
        "name": " Manuel Vasquez #999336"
      },
      {
        "date": "January 21, 2015 ",
        "text": "There are no endings, only beginnings. Love yall, see you soon. ",
        "name": "Arnold Prieto  #999149"
      },
      {
        "date": "April 16, 2014  ",
        "text": "(Written statement) ",
        "name": "Jose Villegas, #999417"
      },
      {
        "date": "April 15, 2015",
        "text": "\"Thank you for being here. I am sorry for all of the pain that I have caused my family, friends, and extended family. Especially to the Police Officers, I know you probably hate me. What happened between me and Rocky happended too fast. I didn't know what happened. I wish y'all peace and love. I hope you have found God just like I have. God bless y'all. I will see you on the other side. I love you.\"",
        "name": "Garza, Manuel #999434"
      },
      {
        "date": "April 9, 2015",
        "text": "“I would like to apologize to the Moreno family and the Steinfeldt family for all of the trouble I have caused them.  I would like to apologize to my family for all of the trouble that I have caused them.  I would also like to thank my family for all of their support.  I guess that’s it.” ",
        "name": "Kent W. Sprouse  #999471"
      }
    ];
})();