const mongoose = require('mongoose');
const Topic = require('./models/Topic');
require('dotenv').config(); // Load environment variables at the top

// Define topic data with all levels and slides
const topicData = [
  {
    name: "Mode",
    description: "Learning about mode in statistics",
    levels: [
      {
        level: 1,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni sees a group of students preparing for a community festival",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642349/uppppfs6fgzvhdhr1v3r.png"
          },
          {
            slideNo: 2,
            text: "They need help figuring out the most popular activities, foods and traditions.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642350/gvwdzot8uwikvfvf3gxt.png"
          },
          {
            slideNo: 3,
            text: "Drag the correct answer inside the block. The mode is the _____ occurring number in a data set",
            dragItems: ["Most frequently", "Sum", "Median", "Least"],
            correctAnswer: "Most frequently"
          }
        ]
      },
      {
        level: 2,
        completed: false,
        slides: [
          {
    




        slideNo: 4,
            text: "The students collected data on what foods their communities enjoy but need help understanding it.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642350/urkttsyubm15ddv4nevc.png"
          },
          {
            slideNo: 5,
            text: "Drag the most frequent food in this data set.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642350/hx2djreul7qh7nfcagku.png",
            dragItems: ["Boerewors", "Bunny Chow", "Milktart", "Boerewors"],
            correctAnswer: "Bunny Chow"
          },
          {
            slideNo: 6,
            text: "Drag the most frequent food in this data set.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642350/otoljjkctzq14js8ukk3.png",
            dragItems: ["Koeksisters", "Bunny Chow", "Milktart", "Boerewors"],
            correctAnswer: "Koeksisters"
          }
        ]
      },
      {
        level: 3,
        completed: false,
        slides: [
          {
            slideNo: 7,
            text: "Brainni and the students decide to ask more people about their favorite festival foods.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642350/pgitlkqzpgvaiua39plt.png"
          },
          {
            slideNo: 8,
            text: "They need help figuring out the most popular activities, foods and traditions.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642352/xseatmew5b9vugwrouso.png",
            dragItems: ["Boerewors", "Biltong", "Milktart", "Koeksisters"],
            correctAnswer: "Boerewors"
          },
          {
            slideNo: 9,
            text: "They need help figuring out the most popular activities, foods and traditions.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642352/zwcr3gcoaskuxmgre9se.png",
            dragItems: ["Boerewors", "Biltong", "Milktart", "Koeksisters"],
            correctAnswer: "Milktart"
          }
        ]
      },
      {
        level: 4,
        completed: false,
        slides: [
          {
            slideNo: 10,
            text: "The students group the data",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642352/zj3uzrfsj8hfitw4n9ev.png"
          },
          {
            slideNo: 11,
            text: "What is the mode",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642352/luebxm93s20bh1zz3tag.png",
            dragItems: ["Boerewors", "Bunny Chow", "Milktart", "Koeksisters"],
            correctAnswer: "Koeksisters"
          },
          {
            slideNo: 12,
            text: "What is the mode",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642352/evgaomlilf6lx673rgg0.png",
            dragItems: ["Boerewors", "Bunny Chow", "Milktart", "Koeksisters"],
            correctAnswer: "Bunny Chow"
          }
        ]
      },
      {
        level: 5,
        completed: false,
        slides: [
          {
            slideNo: 13,
            text: "Brainni and the students decide to collect more from their classmates",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642352/nyyvru0wvuqy97w9urve.png"
          },
          {
            slideNo: 14,
            text: "They collect this set of data: Boerewors rolls, Chakalaka, Samoosa, Bobotie, Chakalaka, Biltong, Bobotie, Samoosa, Biltong, Samoosa, Biltong, Chakalaka, Bobotie, Samoosa. What is the mode?",
            dragItems: ["Bobotie", "Biltong", "Samoosas", "Chakalaka"],
            correctAnswer: "Samoosas"
          },
          {
            slideNo: 15,
            text: "Here is the previous list: Chakalaka, Biltong, Bobotie, Biltong, Biltong, Bobotie Biltong, Biltong, Samoosa, Biltong, Chakalaka, Bobotie, Samoosa. But two students change their minds from Biltong to Chakalaka. How many students now prefer Chakalaka?",
            dragItems: ["5", "4", "3", "6"],
            correctAnswer: "5"
          }
        ]
      },
      {
        level: 6,
        completed: false,
        slides: [
          {
            slideNo: 16,
            text: "Now the students want to know how much money people are willing to spend on food at the festival.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642353/ykhjvdrpiixpas6mvqrd.png"
          },
          {
            slideNo: 17,
            text: "They ask a bunch of community members how much they usually spend on food at festivals.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642353/z4mmiblom5upu4dbjidf.png"
          },
          {
            slideNo: 18,
            text: "They obtained the following data set: R50, R40, R100, R10, R130, R40, R100, R10, R45, R100, R80, R60, R80, R25, R50, R100, R130, R10, R100, R70, R70, R100. Drag the correct mode to the box",
            dragItems: ["R10", "R100", "R50", "R70"],
            correctAnswer: "R100"
          },
          {
            slideNo: 19,
            text: "They obtained the following data set: R50, R40, R100, R10, R130, R40, R100, R10, R45, R100, R80, R60, R80, R25, R50, R100, R130, R10, R100, R70, R70, R100. Two more people say they usually spend R50. Drag the new mode to the box",
            dragItems: ["R10", "R100", "R50", "R70"],
            correctAnswer: "R100"
          }
        ]
      },
      {
        level: 7,
        completed: false,
        slides: [
          {
            slideNo: 20,
            text: "Oops! After double checking the data, Brainni realises that the students recorded some of the results incorrectly.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642353/bsahe0dijnpc8sb9yxdi.png"
          },
          {
            slideNo: 21,
            text: "But don’t worry, you can help them fix it. Drag the correct values to the mode of this new data set: R100, R50, R60, R50, R70, R100, R100, R50, R10, R10, R50, R50, R100, R80, R60, R100, R130, R60, R100, R100.",
            dragItems: ["R10", "R100", "R50", "R70"],
            correctAnswer: "R100"
          },
          {
            slideNo: 22,
            text: "They collect this set of data: Boerewors rolls, Chakalaka, Samoosa, Bobotie, Chakalaka, Biltong, Bobotie, Samoosa, Biltong, Samoosa, Biltong, Chakalaka, Bobotie, Samoosa.  It wasn’t recorded that two more students said that they like Boerewors rolls. What is the mode?",
            dragItems: ["Samoosa", "Chakalaka", "Bobotie", "Biltong"],
            correctAnswer: "Samoosa"
          }
        ]
      },
      {
        level: 8,
        completed: false,
        slides: [
          {
            slideNo: 23,
            text: "The students want to explore more data about festival preferences. They ask their classmates about their favorite festival games",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642353/s5fsx3qgq8aq1yzs7ro7.png "
          },
          {
            slideNo: 24,
            text: "They collect this set of data: Ring Toss, Tug of War, Ring Toss, Water Balloon Toss, Tug of War, Water Balloon Toss, Sack Race, Sack Race, Water Balloon Toss, Tug of War, Sack Race, Ring Toss, Ring Toss. Drag the mode to the box",
            dragItems: ["Ring Toss", "Water Balloon Toss", "Tug of War", "Sack Race"],
            correctAnswer: "Ring Toss"
          },
          {
            slideNo: 25,
            text: "They collect this set of data: Ring Toss, Tug of War, Ring Toss, Water Balloon Toss, Tug of War, Water Balloon Toss, Sack Race, Sack Race, Water Balloon Toss, Tug of War, Sack Race, Ring Toss, Ring Toss. Three more students say their favorite game is Water Balloon Toss. What is the new mode?",
            dragItems: ["Ring Toss and Water Balloon Toss", "Tug of War", "Ring Toss and Water Balloon Toss", "Ring Toss and Tug of War"],
            correctAnswer: "Ring Toss and Water Balloon Toss"
          }
        ]
      },
      {
        level: 9,
        completed: false,
        slides: [
          {
            slideNo: 26,
            text: "Brainni and the students decide to survey their community about their favorite festival treats. They promise a surprise treat to those who participate!",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642354/cytpoqqqu4hsp7t2j5ho.png "
          },
          {
            slideNo: 27,
            text: "They gather the following data: Ice Cream, Popcorn, Ice Cream, Hot Dog, Hot Dog, Ice Cream, Popcorn, Popcorn, Candy Floss, Candy Floss, Hot Dog, Ice Cream, Popcorn, Hot Dog, Candy Floss. If four more people say they love Popcorn, how does that change the mode?",
            dragItems: ["Ice cream", "Hot Dog", "Popcorn", "Candy Floss"],
            correctAnswer: "Ice cream"
          },
          {
            slideNo: 28,
            text: "They gather the following data: Ice Cream, Popcorn, Ice Cream, Hot Dog, Hot Dog, Ice Cream, Popcorn, Popcorn, Candy Floss, Candy Floss, Hot Dog, Ice Cream, Popcorn, Hot Dog, Candy Floss. If four more people say they love Popcorn, how does that change the mode?",
            dragItems: ["Ice cream", "Hot Dog", "Popcorn", "Candy Floss"],
            correctAnswer: "Popcorn"
          }
        ]
      },
      {
        level: 10,
        completed: false,
        slides: [
          {
            slideNo: 29,
            text: "Brainni is curious to see if the favorite games change over time. They survey the students again about their favorite festival games after a week.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642353/jkiteddxfjjamreqtv7z.png"
          },
          {
            slideNo: 30,
            text: "They collect the following data: Tug of War, Sack Race, Ring Toss, Tug of War, Water Balloon Toss, Ring Toss, Ring Toss, Sack Race, Tug of War, Tug of War, Ring Toss, Water Balloon Toss, Tug of War, Ring Toss.Drag the mode to the box",
            dragItems: ["Tug of War", "Ring Toss", "Sack Race", "Water Balloon Toss"],
            correctAnswer: "Tug of War"
          },
          {
            slideNo: 31,
            text: "They collect the following data: Tug of War, Sack Race, Ring Toss, Tug of War, Water Balloon Toss, Ring Toss, Ring Toss, Sack Race, Tug of War, Tug of War, Ring Toss, Water Balloon Toss, Tug of War, Ring Toss. If three more students now prefer Tug of War  What is the new mode?",
            dragItems: ["Tug of War", "Ring Toss", "Sack Race", "Water Balloon Toss"],
            correctAnswer: "Tug of War"
          }
        ]
      }
    ]
  },
  {
    name: "Median",
    description: "Learning about median in statistics",
    levels: [
      {
        level: 1,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni was surprised when the power went out one evening and realized it was load shedding!",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685973/median_image1_jxo7ct.png"
          },
          {
            slideNo: 2,
            text: "Brainni decided to have a candlelit dinner and thought it would be useful to track the median load shedding hours.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685974/median_image2_xsgon3.png"
          },
          {
            slideNo: 3,
            text: "Drag the correct answer inside the block. The median represents the ____________ value in a dataset when the values are arranged in ascending or descending order.",
            dragItems: ["Highest", "Lowest", "Middle", "Average"],
            correctAnswer: "Middle"
          }
        ]
      },
      {
        level: 2,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni recorded the load shedding hours over a week: ",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685974/median_image3_nkf3ub.png"
          },
          {
            slideNo: 2,
            text: "Here are the results: 1, 2, 1, 3, 1, 2, 4. What is the median number of hours per day?",
            dragItems: ["1", "2", "3", "4"],
            correctAnswer: "2"
          },
          {
            slideNo: 3,
            text: "Brainni noted the durations (in hours): 0.5, 1, 0.5, 2, 1, 1.5, What is the median duration of a power cut?",
            dragItems: ["1", "1.5", "0.5", "2"],
            correctAnswer: "1"
          }
        ]
      },
      {
        level: 3,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni has friends from different communities and decided to ask them about how often they experience load shedding in a week.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685953/median_image4_dzozlh.png"
          },
          {
            slideNo: 2,
            text: "Here are their responses, what is the median:",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685952/median_image5_lv120l.png",
            dragItems: ["0", "5", "8", "7"],
            correctAnswer: "5"
          },
          {
            slideNo: 3,
            text: "Brainni wants a larger dataset and decides to ask more friends. What is the median",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685952/median_image6_vwdtim.png",
            dragItems: ["4", "8", "3", "5"],
            correctAnswer: "4"
          }
        ]
      },
      {
        level: 4,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni realized that understanding these patterns could help others be better prepared for future power outages.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685952/median_image7_chhwwx.png"
          },
          {
            slideNo: 2,
            text: "For the next 21 days, Brainni recorded these hours: 2, 2, 3, 3, 1, 4, 3, 2, 3, 4, 2, 2, 3, 4, 3, 2, 4, 2, 3, 3, 2. What is the median number of hours per day?",
            dragItems: ["2", "3", "3.5", "4"],
            correctAnswer: "3"
          },
          {
            slideNo: 3,
            text: "Brainni tracked the durations (in hours) of power cuts over the same period: 1, 2, 1.5, 3, 2.5, 1, 3.5, 2, 2.5, 3, 1.5, 1.5, 2, 3, 2, 1, 2.5, 2, 3, 2.5, 1. What is the median duration of a power cut?",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642345/koyp838noxb8vmjxuutw.png",
            dragItems: ["2", "1.5", "3", "2.5"],
            correctAnswer: "1.5"
          }
        ]
      },
      {
        level: 5,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Meet Mr. Gumede",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685952/median_image9_z9fo6p.png"
          },
          {
            slideNo: 2,
            text: "He’s a Grade 7 Maths teacher and recently his students wrote a maths test out of 100 marks.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685953/median_image10_yd10yl.png"
          },
          {
            slideNo: 3,
            text: "Mr. Gumede wants to find the median mark in his class.",
            image:"https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685953/median_image11_koasi4.png" 
          },
          {
            slideNo: 4,
            text: "He listed their marks from greatest to least: 95, 92, 87, 85, 80, 78, 76, 73, 70, 66, 54. What is the median?",
            dragItems: ["76", "78", "87", "80"],
            correctAnswer: "78"
          },
          {
            slideNo: 5,
            text: "3 more students transfer to Mr. Gumede’s class.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685953/median_image12_dsolon.png"
          },
          {
            slideNo: 6,
            text: "Their marks are added to the list: 77, 78, 67, 76, 73, 66, 80, 95, 92, 70, 85, 87, 98, 54. What is the new median?",
            dragItems: ["77.5", "78", "87", "77"],
            correctAnswer: "77.5"
          }
        ]
      },
      {
        level: 6,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Mr. Gumede decides to teach the students about budgeting by asking them to list their weekly allowances.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685953/median_image13_t7li0q.png"
          },
          {
            slideNo: 2,
            text: "The amounts are: R50, R60, R55, R70, R65, R75, R80, R85, R90, R95, R100, R105, R110, R115, and R120. What is the median weekly allowance?",
            dragItems: ["R70", "R75", "R80", "R85"],
            correctAnswer: "R80"
          },
          {
            slideNo: 3,
            text: "Given the previous list: R50, R60, R55, R70, R65, R75, R80, R85, R90, R95, R100, R105, R110, R115, and R120. Brainni’s allowance of R100 is added. What is the new median?",
            dragItems: ["R87.5", "R90", "R95", "R85.5"],
            correctAnswer: "R87.5"
          }
        ]
      },
      {
        level: 7,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni decides to spend some allowance money at the tuckshop",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685953/median_image14_dseujg.png"
          },
          {
            slideNo: 2,
            text: "Given the following items, what is the median item?",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685953/median_image15_uma7r6.png",
            dragItems: ["lollipops", "hot chips", "hotdog", "sweets"],
            correctAnswer: "chips"
          },
          {
            slideNo: 3,
            text: "Brainni gathers more options. What is the median price?",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685954/median_image16_evxhxa.png",
            dragItems: ["R15.5", "R20", "R15", "R16.5"],
            correctAnswer: "R15"
          }
        ]		
      },
      {
        level: 8,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "It’s the end of the term and Mr. Gumede’s class decide to go to a restaurant.",
            image: "https://res.cloudinary.com/dwcw7rzmm/image/upload/v1718642349/w9nsjnxtsrewxewiqleo.png "
          },
          {
            slideNo: 2,
            text: "The amount of money they spend on their meals were: R150, R200, R120, R170, R180, R250, R190, and R160. What is the median amount spent per person?",
            dragItems: ["R190", "R160", "R175", "R200"],
            correctAnswer: "R175"
          }
        ]
      },
      {
        level: 9,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Mr. Gumede decides to get the rest of the students dessert well",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718685954/median_image18_gw12jd.png" 
          },
          {
            slideNo: 2,
            text: "He looks at the list before he buys the desserts: R150, R200, R120, R170, R180, R250, R190, R160, R50, R50",
            dragItems: [  "R90", "R165", "R175", "R190"],
            correctAnswer: "R165"
          },
          {
            slideNo: 3,
            text: "Given the previous list: R150, R200, R120, R170, R180, R250, R190, R160, R50, R50. Mr. Gumede buys 6 more desserts that cost R60",
            dragItems: ["R90", "R165", "R175", "R190"],
            correctAnswer: "R90"
          }
        ]
      },
      {
        level: 10,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "5 students arrive late to the restaurant …"
          },
          {
            slideNo: 2,
            text: "Given the previous list: R150, R200, R120, R170, R180, R250, R190, R160, R50, R50. What will the new median be if the students ordered fod for: R70, R120, 160, R170, R90",
            dragItems: ["R170", "R160", "R175", "R190"],
            correctAnswer: "R160"
          },
          {
            slideNo: 3,
            text: "Given the previous list: R50, R50, R70, R90, R120, R120, R150, R160, R160, R170, R170, R180, R190, R200, R250, Two students change their order from R160 to R180. What is the new median ?",
            dragItems: ["R170", "R160", "R175", "R190" ],
            correctAnswer: "R170"
          }
        ]
      }
    ]
  },
  {
    name: "Mean",
    levels: [
      {
        level: 1,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni decides to go to the local grocery store to pick up some ingredients for breakfast.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682617/mean_image1_gwlhga.png"
          },
          {
            slideNo: 2,
            text: "Remembering the concept of mean from math class, Brainni realizes that finding the mean price of the ingredients could help in making a budget-friendly breakfast",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682617/mean_image2_ueisfi.png"
          },
          {
            slideNo: 3,
            text: "What is the mean? The mean is the ________ of a set of numbers.",
            dragItems: ["Highest value", "Middle value", "Average value", "Sum"],
            correctAnswer: "Average value"
          }
        ]
      },
      {
        level: 2,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni recorded the prices of five different grocery items at the local grocery store:",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682617/mean_image3_mttbpr.png"
          },
          {
            slideNo: 2,
            text: "Bread for R15, milk for R20, eggs for R25, cheese for R30, and butter for R35. What is the mean price of these grocery items?",
            dragItems: ["R25", "R30", "R27.50", "R32.50"],
            correctAnswer: "R25"
          },
          {
            slideNo: 3,
            text: "Brainni collects more food items: Bread for R15, milk for R20, eggs for R25, cheese for R30, butter for R35, and jam for R10. What is the mean price of these grocery items?",
            dragItems: ["R25", "R30", "R22.50", "R32.50"],
            correctAnswer: "R22.50"
          }
        ]
      },
      {
        level: 3,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni quickly gets home and makes a delicious breakfast.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682618/mean_image4_gh85ul.png"
          },
          {
            slideNo: 2,
            text: "It's time to leave the house now and Brainni thinks about the time it usually takes to get to the destination.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682617/mean_image5_uxfl9l.png"
          },
          {
            slideNo: 3,
            text: "Brainni measured the travel times for a week consecutive days: 30 minutes, 15 minutes, 25 minutes, 35 minutes, 40 minutes, 25 minutes, and 45 minutes. What is the mean travel time?",
            dragItems: ["30 minutes", "35 minutes", "40 minutes", "37 minutes"],
            correctAnswer: "30 minutes"
          },
          {
            slideNo: 4,
            text: "Brainni measured the travel times for 2 weeks: 30 minutes, 35 minutes, 40 minutes, 25 minutes, 45 minutes, 32 minutes, 38 minutes, 33 minutes, 29 minutes, 36 minutes, 31 minutes, 42 minutes, 34 minutes, and 28 minutes. What is the mean travel time?",
            dragItems: ["32 minutes", "35 minutes", "33 minutes", "36 minutes"],
            correctAnswer: "33 minutes"
          }
        ]
      },
      {
        level: 4,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brrr its cold outside.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682618/mean_image6_kuhdbl.png"
          },
          {
            slideNo: 2,
            text: "Brainni recorded the temperatures the town over the past week: -5°C, -2°C, 0°C, -4°C, -8°C, -1°C, and -3°C. What is the mean temperature?",
            dragItems: ["-4°C", "-2°C", "-3°C", "-1°C"],
            correctAnswer: "-3°C"
          },
          {
            slideNo: 3,
            text: "With the previous temperatures: -5°C, -2°C, 0°C, -4°C, -8°C, -1°C, and -3°C. Brainni adds two more temperatures 5°C, 8°C. What is the mean?",
            dragItems: ["-1.1°C", "0°C", "4°C", "2°C"],
            correctAnswer: "-1.1°C"
          }
        ]
      },
      {
        level: 5,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Let’s go analyse a school while Brainni warms up",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682618/mean_image7_yigmox.png"
          },
          {
            slideNo: 2,
            text: "Here are the test scores of 11 Grade 7 students: 75, 80, 85, 90, 95, 70, 75, 80, 85, 90. What is the mean score?",
            dragItems: ["80.0", "82.5", "81.0", "81.5"],
            correctAnswer: "82.5"
          },
          {
            slideNo: 3,
            text: "These are the ages of some assistants at the school: 17 years, 18 years, 19 years, 20 years, 21 years, 18 years, 19 years, 20 years, 21 years, 22 years, 23 years, 20 years, 25 years, 20 years. What is the mean age?",
            dragItems: ["20 years", "20.2 years", "23 years", "21.4 years"],
            correctAnswer: "20.2 years"
          }
        ]
      },
      {
        level: 6,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni tracks the daily rainfall amounts in the garden for seven days:",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682617/mean_image8_jus4ql.png"
          },
          {
            slideNo: 2,
            text: "This is the dataset: 5mm, 10mm, 15mm, 20mm, 25mm, 30mm, and 35mm. What is the mean daily rainfall?",
            dragItems: ["15mm", "20mm", "18mm", "22mm"],
            correctAnswer: "20mm"
          },
          {
            slideNo: 3,
            text: "Given this dataset: 5mm, 4mm, 10mm, 16mm, 32mm, 15mm, 24mm, 20mm, 16mm, 25mm, 30mm, 35mm, 40mm, 16mm, 24mm. Brainni realized that instead of 18mm, she recorded 16mm. What is the new mean?",
            dragItems: ["21.2mm", "20mm", "18mm", "24mm"],
            correctAnswer: "21.2mm"
          }
        ]
      },
      {
        level: 7,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Let's go visit another school in Durban",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682617/mean_image9_lxy64b.png"
          },
          {
            slideNo: 2,
            text: "Here are the ages of 9 learners in the school: 13 years, 14 years, 15 years, 16 years, 14 years, 15 years, 16 years, 17 years, 18 years. What is the mean age?",
            dragItems: ["15 years", "16 years", "16.5 years", "17 years"],
            correctAnswer: "15 years"
          },
          {
            slideNo: 3,
            text: "They weigh 10 grade 8 students and get this dataset: 40 kg, 45 kg, 50 kg, 55 kg, 60 kg, 45 kg, 50 kg, 55 kg, 60 kg, 65 kg. What is the mean weight?",
            dragItems: ["50 kg", "55 kg", "52.5 kg", "57.5 kg"],
            correctAnswer: "52.5 kg"
          }
        ]
      },
      {
        level: 8,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni now decides to take surveys of some students in the class",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682618/mean_image10_oot9mf.png"
          },
          {
            slideNo: 2,
            text: "Average age survey: One student entered -12 years instead of their birth year. How does this affect the mean, and what's the solution?",
            dragItems: [
              "a) Decreases mean, exclude negative age",
              "b) Increases mean, use median",
              "c) No effect, calculate mode",
              "d) Increases mean, replace negative age with average age"
            ],
            correctAnswer: "a) Decreases mean, exclude negative age"
          },
          {
            slideNo: 3,
            text: "A survey on siblings: most had 1 or 2 siblings, but one student claimed 10. How does this affect the mean?",
            dragItems: [
              "a) Not enough information provided",
              "b) Decreases mean, use median",
              "c) No effect, calculate mode",
              "d) Increases mean"
            ],
            correctAnswer: "d) Increases mean"
          }
        ]
      },
      {
        level: 9,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni continues with the survey",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718682618/mean_image11_zlwdfq.png"
          },
          {
            slideNo: 2,
            text: "Student's sprint times: 10.2, 10.5, 10.3, 10.6, 10.4, and an estimated 12 seconds due to a timing error. How does this affect the mean, and what's the solution?",
            dragItems: [
              "a) Decreases mean, exclude estimated time",
              "b) Not enough information given",
              "c) No effect, calculate median",
              "d) Increases mean"
            ],
            correctAnswer: "a) Increases mean"
          },
          {
            slideNo: 3,
            text: "Students' test scores were 85, 90, 88, 92, and one outlier at 50. How does this outlier affect the mean, and what's the new mean?",
            dragItems: [
              "a) Increases the mean,  89",
              "b) Decreases the mean to 81",
              "c) Doesn't affect the mean",
              "d) Need more data"
            ],
            correctAnswer: "b) Decreases the mean, 81,"
          }
        ]
      },
      {
        level: 10,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Brainni conducts another study.",
            image: "mean_image13"
          },
          {
            slideNo: 2,
            text: "In a study on household incomes, the reported amounts were R50,000, R55,000, R60,000, R65,000, R70,000, and one outlier at R200,000. How does this outlier affect the mean, and what's the new mean?",
            dragItems: [
              "a) Increases the mean,R83,333.33",
              "b) Decreases the mean, R60,000",
              "c) Doesn't affect the mean",
              "d) Need more data"
            ],
            correctAnswer: "a) Increases the mean, R83,833.33."
          },
          {
            slideNo: 3,
            text: "In a study on car prices, the recorded values were R20,000, R22,000, R25,000, R30,000, R35,000, and one outlier at R10,000. How does this outlier affect the mean, and what's the new mean?",
            dragItems: [
              "a) Decreases the mean, R23,666.67",
              "b) Increases the mean, R28,000",
              "c) Doesn't affect the mean",
              "d) Need more data"
            ],
            correctAnswer: "b) Decreases the mean, R23,666.67"
          }
        ]
      }
    ]
  },{
    name: "Perimeter",
    description: "Learning about perimeter in geometry",
    levels: [
      {
        level: 1,
        completed: false,
        slides: [
          {
            slideNo: 1,
            text: "Leah wanted to take a short break from her Maths homework and decided to hit the skate park.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693362/per_image1_gmwswd.png"
          },
          {
            slideNo: 2,
            text: "She saw Mr. Geo, the park manager, measuring the perimeter.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693363/per_image2_nhalhf.png"
          },
          {
            slideNo: 3,
            text: "Drag the correct answer into the box. Perimeter is the ________.",
            dragItems: [
              "Area of a shape",
              "Length around the outside of a shape",
              "Measure the inside of a shape",
              "Distance from one corner to another"
            ],
            correctAnswer: "Length around the outside of a shape"
          }
        ]
      },
      {
        level: 2,
        completed: false,
        slides: [
          {
            slideNo: 4,
            text: "Meet Mr. Geo, the park manager",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693363/per_image3_dizt4u.png"
          },
          {
            slideNo: 5,
            text: "If Mr. Geo measures that rectangular skate park has a length of 15 meters and a width of 10 meters. What is the perimeter of the skate park?",
            dragItems: [
              "20 meters",
              "40 meters",
              "50 meters",
              "90 meters"
            ],
            correctAnswer: "50 meters"
          },
          {
            slideNo: 6,
            text: "If Mr. Geo measures that a bigger rectangular skate park has a length of 25 meters and a width of 20 meters. What is the perimeter of the skate park?",
            dragItems: [
              "20 meters",
              "40 meters",
              "50 meters",
              "90 meters"
            ],
            correctAnswer: "90 meters"
          }
        ]
      },
      {
        level: 3,
        completed: false,
        slides: [
          {
            slideNo: 7,
            text: "Mr. Geo is now thinking about building a triangular park.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693363/per_image4_pcmnnv.png"
          },
          {
            slideNo: 8,
            text: "If the perimeter of a triangular skate park is 60 meters and all sides are equal, what is the length of each side?",
            dragItems: [
              "10 meters",
              "15 meters",
              "20 meters",
              "30 meters"
            ],
            correctAnswer: "20 meters"
          },
          {
            slideNo: 9,
            text: "If the perimeter of a triangular skate park is 90 meters and one side measures 40 meters while the other two sides are equal, what is the length of each of the equal sides?",
            dragItems: [
              "20 meters",
              "30 meters",
              "25 meters",
              "60 meters"
            ],
            correctAnswer: "25 meters"
          }
        ]
      },
      {
        level: 4,
        completed: false,
        slides: [
          {
            slideNo: 10,
            text: "Mr. Geo calls a mayor to ask her if he can build a skate park.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693363/per_image5_heefae.png"
          },
          {
            slideNo: 11,
            text: "The mayor wants to know the perimeter of this park, so she can decide where it can be built in the city.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693363/per_image6_qztzk0.png"
          },
          {
            slideNo: 12,
            text: "The perimeter of a triangular skate park is 150 meters. If one side measures 50 meters and another measures 60 meters, what is the length of the third side?",
            dragItems: [
              "40 meters",
              "30 meters",
              "25 meters",
              "70 meters"
            ],
            correctAnswer: "40 meters"
          },
          {
            slideNo: 13,
            text: "A triangular skate park has one side that measures 120 meters and another side that measures 150 meters. If the perimeter of the skate park is 400 meters, what is the length of the third side?",
            dragItems: [
              "100 meters",
              "130 meters",
              "140 meters",
              "170 meters"
            ],
            correctAnswer: "130 meters"
          }
        ]
      },
      {
        level: 5,
        completed: false,
        slides: [
          {
            slideNo: 14,
            text: "Mr. Geo also needs to consider the safety of the skate park, and wants to add a safety fence.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693364/per_image7_vlrem6.png"
          },
          {
            slideNo: 15,
            text: "If a triangular skate park has sides measuring 14 meters, 20 meters, and 25 meters. If a safety fence is to be installed around the park, how many meters of fencing material will be needed?",
            dragItems: [
              "54 meters",
              "59 meters",
              "64 meters",
              "69 meters"
            ],
            correctAnswer: "59 meters"
          },
          {
            slideNo: 16,
            text: "Mr. Geo wants to ensure extra safety. If a triangular skate park has sides measuring 14 meters, 10 meters, and 12 meters. A fence is to be built around the park with an additional 2 meters of fencing on each side for extra safety. What will be the total length of the fence needed?",
            dragItems: [
              "36 meters",
              "40 meters",
              "42 meters",
              "46 meters"
            ],
            correctAnswer: "42 meters"
          }
        ]
      },
      {
        level: 6,
        completed: false,
        slides: [
          {
            slideNo: 17,
            text: "Leah overhears Mr. Geo and starts excitedly imagining how she would build a skate park.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693364/per_image8_fgh5mh.png"
          },
          {
            slideNo: 18,
            text: "This is the shape of the skate park Leah imagines building, what is the perimeter?",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718694586/20_m_20240618_090658_0000_d5z642.png",

            dragItems: [
              "136 meters",
              "182 meters",
              "128 meters",
              "120 meters"
            ],
            correctAnswer: "128 meters"
          },
          {
            slideNo: 19,
            text: "Leah wants to add another section to the skate park. What will the perimeter be?",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693372/per_image11_cyto0m.png",

            dragItems: [
              "236 meters",
              "240 meters",
              "232 meters",
              "246 meters"
            ],
            correctAnswer: "232 meters"
          }
        ]
      },
      {
        level: 7,
        completed: false,
        slides: [
          {
            slideNo: 20,
            text: "Leah tells her friend, Nomvula, about dreams of building her own skate park and they plan it together.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693372/per_image9_mfhrfz.png"
          },
          {
            slideNo: 21,
            text: "Nomvula thinks that Leah should replace the pink irregular shape with a rectangular area that has a length of 15 meters and a width of 10 meters. What is the new perimeter of the entire skate park?",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693372/per_image11_cyto0m.png",
            dragItems: [
              "136 meters",
              "182 meters",
              "178 meters",
              "120 meters"
            ],
            correctAnswer: "178 meters"
          },
          {
            slideNo: 22,
            text: "Leah thinks it's a good idea to add a rectangular area that has a length of 15 meters and a width of 10 meters, but decides that she will still keep the pink area. What is the new perimeter?",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693372/per_image11_cyto0m.png",
            dragItems: [
              "232 meters",
              "240 meters",
              "282 meters",
              "246 meters"
            ],
            correctAnswer: "282 meters"
          }
        ]
      },
      {
        level: 8,
        completed: false,
        slides: [
          {
            slideNo: 23,
            text: "In the meantime, Mr. Geo is thinking about the cost of building different skate parks.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693372/per_image12_d9y7kr.png"
          },
          {
            slideNo: 24,
            text: "If a rectangular skate park measures 50 meters by 30 meters. If a fence is to be erected around the perimeter of the rink and the cost of fencing is R50 per meter, what will be the total cost of the fencing?",
            dragItems: [
              "R5800",
              "R8000",
              "R8500",
              "R6400"
            ],
            correctAnswer: "R8000"
          },
          {
            slideNo: 25,
            text: "So the rectangular skate park measures 50 meters by 30 meters. If the fence is to be erected around the perimeter of the rink and the original cost of fencing is R50 per meter, but Mr. Geo can get a 20% off discount. What will be the total cost of the fencing?",
            dragItems: [
              "R5800",
              "R8000",
              "R8500",
              "R6400"
            ],
            correctAnswer: "R6400"
          }
        ]
      },
      {
        level: 9,
        completed: false,
        slides: [
          {
            slideNo: 26,
            text: "Leah decides to skate back home and finish her Maths homework.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693372/per_image13_gvk9i2.png"
          },
          {          slideNo: 27,
            text: "She sees a parking lot and decides to skate there for a few minutes. The length of the parking lot is 500 meters, and the width is 100 meters. If Leah completes four laps around the path, how many meters will she have traveled in total?",
            dragItems: [
              "4000 meters",
              "4800 meters",
              "3000 meters",
              "3800 meters"
            ],
            correctAnswer: "4800 meters"
          },
          {
            slideNo: 28,
            text: "As she makes her way back home, she notices a circular route and can't resist the urge to skate along it. The diameter of the circular path is 100 meters. What is the total distance you will travel if you go around the path once?",
            dragItems: [
              "100π meters",
              "200π meters",
              "300π meters",
              "400π meters"
            ],
            correctAnswer: "100π meters"
          }
        ]
      },
      {
        level: 10,
        completed: false,
        slides: [
          {
            slideNo: 29,
            text: "Leah finally gets home and starts to do her homework.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693373/per_image14_kfysd6.png"
          },
          {
            slideNo: 30,
            text: "She is delighted to see that the rest of the questions are about perimeter. Let’s do them together.",
            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718693372/per_image15_td3ynv.png"
          },
          {
            slideNo: 31,
            text: "A circular skating rink has a perimeter of 100 meters. What is the radius of the skating rink?",
            dragItems: [
              "25.22 meters",
              "20.41 meters",
              "15.92 meters",
              "10 meters"
            ],
            correctAnswer: "15.92 meters"
          },
          {
            slideNo: 32,
            text: "A circular skating rink has a perimeter of 100 meters. What is the diameter of the skating rink?",
            dragItems: [
              "50.44 meters",
              "40.82 meters",
              "31.84 meters",
              "10 meters"
            ],
            correctAnswer: "31.84 meters"
          }
        ]
      }
    ]
  },{
    name: "Probability",
    description: "Learning about probability in a fun and engaging way through various games and scenarios",
    levels: [
        {
            level: 1,
            completed: false,
            slides: [
                {
                    slideNo: 1,
                    text: "Brainni is planning a games night for some friends",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695131/prob_image1_nh07yi.png"
                },
                {
                    slideNo: 2,
                    text: "Brainni wanted to add a fun twist to the evening by introducing a special game about probability",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695140/prob_image2_ahd5db.png"
                },
                {
                    slideNo: 3,
                    text: "Drag the correct answer to the box. Probability is the measure of the _______________ that an event will occur.",
                    dragItems: ["likelihood", "certainty", "chance", "frequency"],
                    correctAnswer: "likelihood"
                }
            ]
        },
        {
            level: 2,
            completed: false,
            slides: [
                {
                    slideNo: 1,
                    text: "Brainni’s friends finally arrive and Brainni starts to explain the game.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695140/prob_image3_gmn6jx.png"
                },
                {
                    slideNo: 2, 
                    text: "The game is called Marble Mayhem and here are the rules. Each player predicts the color of the marble drawn from a bag without looking. The bag contains a mix of red, blue, and green marbles. Players must calculate the probability of drawing a specific color based on the total number of marbles and the number of marbles of that color in the bag. The player with the most accurate predictions wins!"
                },
                {
                    slideNo: 3,
                    text: "Brainni has a bag containing 2 red marbles and 3 green marbles. What is the probability of Themba randomly selecting a red marble from the bag?",
                    dragItems: ["1/5", "2/5", "3/5", "1/2"],
                    correctAnswer: "2/5"
                },
                {
                    slideNo: 4,
                    text: "Brainni now has a bag containing 4 red marbles, 3 blue marbles, and 2 green marbles. What is the probability of Dorothea randomly selecting a blue marble from the bag?",
                    dragItems: ["1/9", "3/9", "3/8", "4/9"],
                    correctAnswer: "3/9"
                }
            ]
        },
        {
            level: 3,
            completed: false,
            slides: [
                {
                    slideNo: 1,
                    text: "The game continues",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695141/prob_image4_cez3hz.png"
                },
                {
                    slideNo: 2,
                    text: "Brainni has a bag containing 8 marbles, some of which are red and the rest are blue. If the probability of selecting a red marble is 3/8, how many blue marbles are in the bag?",
                    dragItems: ["2", "3", "4", "5"],
                    correctAnswer: "5"
                },
                {
                    slideNo: 3,
                    text: "It’s Pieter’s turn and Brainni now has a bag containing 8 marbles: 3 red, 2 blue, and 3 green. What is the probability of him randomly selecting a red or blue marble from the bag?",
                    dragItems: ["3/8", "5/8", "5/9", "3/9"],
                    correctAnswer: "5/8"
                }
            ]
        },
        {
            level: 4,
            completed: false,
            slides: [
                {
                    slideNo: 1,
                    text: "Brainni want to move on to the next game but the friends want to play it two more times",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695148/prob_image5_l0fghh.png"
                },
                {
                    slideNo: 2,
                    text: "Bag A contains 4 red marbles and 6 blue marbles, while Bag B contains 3 red marbles and 5 blue marbles. What is the probability of Palesa selecting a blue marble from any of the bags?",
                    dragItems: ["1/2", "3/10", "4/10", "11/18"],
                    correctAnswer: "11/18"
                },
                {
                    slideNo: 3,
                    text: "Brainni has a bag containing 8 marbles. If the probability of selecting a green marble is 3/8, what is the probability of Themba not selecting a green marble?",
                    dragItems: ["1/4", "5/8", "5/6", "3/8"],
                    correctAnswer: "5/8"
                }
            ]
        },
        {
            level: 5,
            completed: false,
            slides: [
                {
                    slideNo: 1,
                    text: "The next game is called Diketo",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695148/prob_image6_sbts6v.png"
                },
                {
                    slideNo: 2,
                    text: "10 stones are used for this round. If 6 of these stones are white and the rest are black, what is the probability of randomly selecting a black stone?",
                    dragItems: ["4/10", "5/10", "6/4", "10/6"],
                    correctAnswer: "4/10"
                },
                {
                    slideNo: 3,
                    text: "12 stones are used for the next round: with 5 of them being red, 3 green, and the rest blue. If Khanyi randomly selects a stone without looking, what is the probability that it is not blue?",
                    dragItems: ["8/12", "1/3", "5/12", "4/12"],
                    correctAnswer: "8/12"
                }
            ]
        },
        {
            level: 6,
            completed: false,
            slides: [
                {
                    slideNo: 1,
                    text: "Brainni decides to make the game more interesting by adding more stones.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695121/prob_image7_ykmagp.png"
                },
                {
                    slideNo: 2,
                    text: "In a game of Diketo, there are 25 stones, some red, some blue and some yellow. If the probability of Mariaan randomly selecting a red stone is 3/25 and it’s 10/25 for the yellow stone, how many red stones are there?",
                    dragItems: ["5", "17", "12", "8"],
                    correctAnswer: "12"
                },
                {
                    slideNo: 3,
                    text: "Dorothea goes next. There are still 25 stones. If the probability of Dorothea randomly selecting a red stone is 3/5 and it’s 5/25 for the yellow stone, how many blue stones are there?",
                    dragItems: ["5", "17", "12", "8"],
                    correctAnswer: "17"
                }
            ]
        },
        {
            level: 7,
            completed: false,
            slides: [
                {
                    slideNo: 1,
                    text: "After Diketo, the friends decide to play cards",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695121/prob_image8_ub8hty.png"
                },
                {
                    slideNo: 2,
                    text: "In a standard deck of 52 playing cards, what is the probability of drawing a heart from the deck?",
                    dragItems: ["1/13", "1/4", "13/52", "1/52"],
                    correctAnswer: "13/52"
                },
                {
                    slideNo: 3,
                    text: "A standard deck of 52 playing cards contains 4 suits: hearts, diamonds, clubs, and spades. If a card is drawn randomly, what is the probability of drawing a face card (jack, queen, or king)?",
                    dragItems: ["3/13", "3/52", "12/52", "12/13"],
                    correctAnswer: "12/52"
                }
            ]
        },
        {
            level: 8,
            completed: false,
            slides: [
                {
                    slideNo: 1,
                    text: "Not everyone likes the card games so they decide to play snakes and ladders.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695122/prob_image9_e9tqz8.png"
                },
                {
                    slideNo: 2,
                    text: "To start moving on the board a player needs to roll an odd number. If a fair six-sided die is rolled, what is the probability of rolling an even number or a number less than 3?",
                    dragItems: ["1/6", "1/3", "2/6", "2/3"],
                    correctAnswer: "2/6"
                },
                {
                    slideNo: 3,
                    text: "A fair six-sided die is rolled. What is the probability of rolling a perfect square?",
                    dragItems: ["1/6", "1/3", "1/2", "2/3"],
                    correctAnswer: "1/6"
                }
            ]
        },
        {
            level: 9,
            completed: false,
            slides: [
                {
                    slideNo: 1,
                    text: "Its time to eat ! Brainni made 3 types of sandwiches: there are 3 types of sandwiches available: ham and cheese, chicken mayo , and peanut butter and jam",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695130/prob_image10_hmtpmd.png"
                },
                {
                    slideNo: 2,
                    text: "If 60% choose ham and cheese sandwiches, 25% choose chicken mayo sandwiches, and the rest choose peanut butter and jam sandwiches, what is the probability that a randomly selected friend chooses a peanut butter and jam sandwich?",
               
                            dragItems: ["0%", "15%", "20%", "25%" ], 
                         correctAnswer: "15%"
                        },
                        {
                            slideNo: 3,
                            text: "Brainni also had 4 pizzas: pepperoni, biltong, veggie, and Hawaiian. If 30% of the guests prefer pepperoni, 25% prefer biltong, 20% prefer veggie, and the rest prefer Hawaiian, what is the probability that a randomly selected guest prefers Hawaiian pizza?",
                            dragItems: ["10%", "15%", "20%", "25%"], 

                            correctAnswer: "25%"
                        }
                    ]
                },
                {
                    level: 10,
                    completed: false,
                    slides: [
                        {
                            slideNo: 1,
                            text: "Earlier on Brainni asked all of the friends what their favourite foods are.",
                            image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718695130/prob_image11_midcuw.png"
                        },
                        {
                            slideNo: 2,
                            text: "40% prefer apples, 30% prefer bananas, and 25% prefer oranges. If a friend is selected at random, what is the probability that they prefer either apples or oranges",
                            dragItems: [ "60%", "65%", "70%", "75%"], 
                            correctAnswer: "65%"
                        },
                        {
                            slideNo: 3,
                            text: "Now for the drinks: there are 3 types of drinks available: soda, juice, and water. If 40% of the guests choose soda, 30% choose juice, and the rest choose water, what is the probability that a randomly selected friend will not choose water?",
                            dragItems: ["60%", "65%", "70%", "75%" ], 
                            correctAnswer: "70%"
                        }
                    ]
                }
            ]
        },

        {
            name: "CommonFractions",
            description: "This module helps students understand the concept of common fractions through various interactive levels of learning.",
            levels: [
              {
                level: 1,
                slides: [
                  {
                    slideNo: 1,
                    text: "Brainni is planning a pizza party.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696438/frac_image1_rjnwfz.png"
                  },
                  {
                    slideNo: 2,
                    text: "But Brainni has a challenge… how do you make sure everyone gets their favorite pizza without running out? Then, a lightbulb moment! Fractions hold the solution.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696438/frac_image2_tqvz6u.png"
                  },
                  {
                    slideNo: 3,
                    text: "Drag the correct answer to the box. A common fraction is a number representing a _______ of a whole.",
                    dragItems: [
                      "part",
                      "portion",
                      "division",
                      "segment"
                    ],
                    correctAnswer: "part"
                  }
                ]
              },
              {
                level: 2,
                slides: [
                  {
                    slideNo: 1,
                    text: "As Brainni waited for everyone to come, the yummy smell of the pizza made her eat a couple of slices.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696438/frac_image3_nzhfv7.png"
                  },
                  {
                    slideNo: 2,
                    text: "Brainni takes a pizza that is divided into 8 equal slices and eats 2 slices, what fraction of the pizza did Brainni eat?",
                    dragItems: [
                      "⅛",
                      "4/8",
                      "2/8",
                      "2/2"
                    ],
                    correctAnswer: "2/8"
                  },
                  {
                    slideNo: 3,
                    text: "After finishing the two slices, Brainni eats some more. So, in total, Brainni ate 7/ 8 slices of pizza. How many more slices did Brainni eat.",
                    dragItems: [
                      "2",
                      "4",
                      "2/4",
                      "5"
                    ],
                    correctAnswer: "5"
                  }
                ]
              },
              {
                level: 3,
                slides: [
                  {
                    slideNo: 1,
                    text: "Brainni's friends finally arrive, just in time before all the pizza is gone.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696447/frac_image4_olxdgn.png"
                  },
                  {
                    slideNo: 2,
                    text: "If 50% of Brainni's friends have arrived at the pizza party, what fraction of her friends is this?",
                    dragItems: [
                      "½",
                      "⅓",
                      "¼",
                      "⅕"
                    ],
                    correctAnswer: "½"
                  },
                  {
                    slideNo: 3,
                    text: "If 20% of the pizzas are pepperoni, what fraction of the pizzas is this?",
                    dragItems: [
                      "½",
                      "⅕",
                      "⅓",
                      "¼"
                    ],
                    correctAnswer: "⅕"
                  }
                ]
              },
              {
                level: 4,
                slides: [
                  {
                    slideNo: 1,
                    text: "More of Brainni’s friends arrive",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696449/frac_image5_rpuker.png"
                  },
                  {
                    slideNo: 2,
                    text: "If 75% of the guests prefer cheese pizza, what fraction of the guests is this?",
                    dragItems: [
                      "¾",
                      "⅓",
                      "¼",
                      "⅕"
                    ],
                    correctAnswer: "¾"
                  },
                  {
                    slideNo: 3,
                    text: "If 10% of Brainni's friends are late to the pizza party, what fraction of her friends is this?",
                    dragItems: [
                      "⅕",
                      "½",
                      "⅒",
                      "¼"
                    ],
                    correctAnswer: "⅒"
                  }
                ]
              },
              {
                level: 5,
                slides: [
                  {
                    slideNo: 1,
                    text: "It’s now time for dessert",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696453/frac_image6_owa8li.png"
                  },
                  {
                    slideNo: 2,
                    text: "If 6 out of 12 dessert cupcakes are chocolate, what is the simplified fraction of chocolate cupcakes?",
                    dragItems: [
                      "1/2",
                      "1/3",
                      "1/4",
                      "2/3"
                    ],
                    correctAnswer: "1/2"
                  },
                  {
                    slideNo: 3,
                    text: "There are 9 strawberry tarts and 15 apple tarts. What is the simplified fraction of strawberry tarts?",
                    dragItems: [
                      "1/2",
                      "3/5",
                      "3/6",
                      "3/8"
                    ],
                    correctAnswer: "⅜"
                  }
                ]
              },
              {
                level: 6,
                slides: [
                  {
                    slideNo: 1,
                    text: "Brainni made signature cupcakes using Gogo’s recipes and put sprinkles on some of them.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696460/frac_image7_ngcazu.png"
                  },
                  {
                    slideNo: 2,
                    text: "Brainni baked 24 cupcakes, and 16 of them have sprinkles. After giving away 8 cupcakes with sprinkles, what is the simplified fraction of the remaining cupcakes with sprinkles?",
                    dragItems: [
                      "1/2",
                      "2/3",
                      "1/4",
                      "1/3"
                    ],
                    correctAnswer: "⅓"
                  },
                  {
                    slideNo: 3,
                    text: "There’s still plenty of dessert left, yay! Brainni has 36 pieces of pie, and 21 of them are apple. Brainni decides to give 12 apple pieces to her friends. What is the simplified fraction of the remaining apple pie pieces?",
                    dragItems: [
                      "1/2",
                      "3/4",
                      "1/4",
                      "5/6"
                    ],
                    correctAnswer: "1/4"
                  }
                ]
              },
              {
                level: 7,
                slides: [
                  {
                    slideNo: 1,
                    text: "The parents started arriving meaning it was time for Brainni’s friends to start going home.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696460/frac_image8_shiew6.png"
                  },
                  {
                    slideNo: 2,
                    text: "After the pizza party, Brainni has 3/4 of a biltong pizza and 1/2 of a pepperoni pizza left. How much pizza is left in total?",
                    dragItems: [
                      "1 1/4",
                      "1/4",
                      "1 1/2",
                      "1/2"
                    ],
                    correctAnswer: "1 1/4"
                  },
                  {
                    slideNo: 3,
                    text: "Brainni had 4/7 of a dessert pie left from the party, then Brainni eats 2/5 of it. How much of the pie is left now?",
                    dragItems: [
                      "3/14",
                      "6/35",
                      "12/35",
                      "5/14"
                    ],
                    correctAnswer: "6/35"
                  }
                ]
              },
              {
                level: 8,
                slides: [
                  {
                    slideNo: 1,
                    text: "The next day ..",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696461/frac_image9_vla9yy.png"
                  },
                  {
                    slideNo: 2,
                    text: "After the pizza party, Brainni had 9/10 of a chocolate cake left. She then gives away 1/4 to a neighbour, how much cake is left",
                    dragItems: [
                      "2/15",
                      "3/10",
                      "1/6",
                      "3/20"
                    ],
                    correctAnswer: "13/20"
                  },
                  {
                    slideNo: 3,
                    text: "Brainni had 5/4 liters of soda at the party. She drank 3/8 liters during the party and gave 1/6 liters to her friend. How much soda does she have left?",
                    dragItems: [
                      "9/8",
                      "9/18",
                      "7/8",
                      "17/24"
                    ],
                    correctAnswer: "17/24"
                  }
                ]
              },
              {
                level: 9,
                slides: [
                  {
                    slideNo: 1,
                    text: "Brainni still has leftover food.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696470/frac_image10_xexqh5.png"
                  },
                  {
                    slideNo: 2,
                    text: "If 2/5 of a dessert pie is left after a party, what percentage of the pie remains?",
                    dragItems: [
                      "10%",
                      "25%",
                      "40%",
                      "50%"
                    ],
                    correctAnswer: "40%"
                  },
                  {
                    slideNo: 3,
                    text: "If 7/8 of a cake is eaten, what percentage of the cake was consumed?",
                    dragItems: [
                      "12.5%",
                      "25%",
                      "62.5%",
                      "87.5%"
                    ],
                    correctAnswer: "87.5%"
                  }
                ]
              },
              {
                level: 10,
                slides: [
                  {
                    slideNo: 1,
                    text: "Here’s a challenge",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718696470/frac_image11_acw1vy.png"
                  },
                  {
                    slideNo: 2,
                    text: "Brainni had 1/3 of a cheese pizza and 1/4 of a pepperoni pizza left after the party. What fraction of the total pizza did Brainni have left? Convert your answer to a percentage.",
                    dragItems: [
                      "58.3%",
                      "52.3%",
                      "41.7%",
                      "48.3%"
                    ],
                    correctAnswer: "58.3%"
                  },
                  {
                    slideNo: 3,
                    text: "Brainni had 2/5 of a cheese pizza and 1/3 of a pepperoni pizza left after the party. What fraction of the total pizza did Brainni have left? Convert your answer to a percentage.",
                    dragItems: ["73%", "26.7%", "37.5%", "41.7%"],
                    correctAnswer: "73%"
                  }
                ]
              }
            ]
          }
          
        ,
        {
            name: "Range",
            description: "This module helps students understand the concept of range in data sets through various levels of interactive learning.",
            levels: [
              {
                level: 1,
                slides: [
                  {
                    slideNo: 1,
                    text: "Mrs. Dlamini has a lot of work to do this week and asked Brainni to be her assistant.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697923/range_image1_soyhhe.png"
                  },
                  {
                    slideNo: 2,
                    text: "She asks Brainni to help her find the range of some tests his students wrote."
                  },
                  {
                    slideNo: 3,
                    text: "The range of a set of data is the difference between the __________ and the smallest values in the set.",
                    dragItems: [
                      "A) sum",
                      "B) median",
                      "C) largest",
                      "D) mean"
                    ],
                    correctAnswer: "C) largest"
                  }
                ]
              },
              {
                level: 2,
                slides: [
                  {
                    slideNo: 1,
                    text: "Mrs. Dlamini teaches a class of Grade 7 students and asks Brainni to help her find the range of the test scores.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697927/range_image3_eotav2.png"
                  },
                  {
                    slideNo: 2,
                    text: "Here are the test scores: 85, 78, 72, 68, 65, 60, 55, 52, 47, 40. What is the range of the test scores?",
                    dragItems: [
                      "A) 45",
                      "B) 38",
                      "C) 50",
                      "D) 35"
                    ],
                    correctAnswer: "A) 45"
                  },
                  {
                    slideNo: 3,
                    text: "Mrs. Dlamini's second class received these test scores: 30, 35, 40, 45, 50, 55, 60, 65, 70, 75. What is the range?",
                    dragItems: [
                      "A) 45",
                      "B) 40",
                      "C) 35",
                      "D) 50"
                    ],
                    correctAnswer: "D) 45"
                  }
                ]
              },
              {
                level: 3,
                slides: [
                  {
                    slideNo: 1,
                    text: "After grading the tests, Mrs. Dlamini notices that some students struggled with certain concepts. To help them, she plans a series of extra lessons.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697935/range_image4_sdwqc0.png"
                  },
                  {
                    slideNo: 2,
                    text: "Here is the list of the numbers of students attending the lessons each day: 15, 20, 25, 22, 18, 17, 21. What is the range of students attending these extra lessons?",
                    dragItems: [
                      "A) 10",
                      "B) 8",
                      "C) 15",
                      "D) 7"
                    ],
                    correctAnswer: "A) 10"
                  },
                  {
                    slideNo: 3,
                    text: "More students attending the extra lessons each day: 26, 23, 27, 25, 21, 19, 25. What is the range?",
                    dragItems: [
                      "A) 10",
                      "B) 8",
                      "C) 15",
                      "D) 7"
                    ],
                    correctAnswer: "B) 8"
                  }
                ]
              },
              {
                level: 4,
                slides: [
                  {
                    slideNo: 1,
                    text: "Mrs. Dlamini had planned a reading competition for the grade 7s and wants Brainni to find the range.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697937/range_image5_favcf7.png"
                  },
                  {
                    slideNo: 2,
                    text: "The number of pages read by each student: 55, 30, 45, 65, 75, 40, 50, 70, 35, 60.",
                    dragItems: [
                      "A) 45",
                      "B) 45",
                      "C) 50",
                      "D) 35"
                    ],
                    correctAnswer: "A) 45"
                  },
                  {
                    slideNo: 3,
                    text: "Mrs. Dlamini promised the winner of the challenge a huge prize and more students joined the reading challenge.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697943/range_image6_sfe1qh.png"
                  },
                  {
                    slideNo: 4,
                    text: "The number of pages read by each student: 55, 30, 45, 65, 56, 106, 16, 100, 76, 54, 75, 40, 50, 70, 35, 60. What is the range?",
                    dragItems: [
                      "A) 90",
                      "B) 100",
                      "C) 110",
                      "D) 120"
                    ],
                    correctAnswer: "A) 90"
                  }
                ]
              },
              {
                level: 5,
                slides: [
                  {
                    slideNo: 1,
                    text: "Mrs. Dlamini asks Brainni to record the time it takes a student to finish reading a line.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697926/range_image2_y1rbiz.png"
                  },
                  {
                    slideNo: 2,
                    text: "Brainni records the reading times of 25 students: 0.65 seconds, 0.42 seconds, 0.85 seconds, 1.10 seconds, 0.75 seconds, 0.30 seconds, 1.20 seconds, 0.48 seconds, 0.35 seconds, 0.50 seconds, 0.80 seconds, 1.40 seconds, 0.32 seconds, 0.95 seconds, 0.70 seconds, 0.27 seconds, 0.60 seconds, 1.30 seconds, 0.45 seconds, 1.00 seconds, 0.90 seconds, 1.50 seconds, 0.40 seconds, 0.55 seconds, 1.20 seconds. What is the range?",
                    dragItems: [
                      "A) 1.25",
                      "B) 1.30",
                      "C) 1.45",
                      "D) 1.50"
                    ],
                    correctAnswer: "A) 1.25"
                  },
                  {
                    slideNo: 3,
                    text: "From the previous dataset, Brainni realizes that the reading time for one of the students is 0.59, not 0.95. How does this change the range?",
                    dragItems: [
                      "A) Increase",
                      "B) Decrease",
                      "C) Stays the same",
                      "D) Not enough data"
                    ],
                    correctAnswer: "C) Stays the same"
                  }
                ]
              },
              {
                level: 6,
                slides: [
                  {
                    slideNo: 1,
                    text: "Mrs. Dlamini plans a day full of activities for all the kids who participated in the reading challenge.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697944/range_image7_kfuqyf.png"
                  },
                  {
                    slideNo: 2,
                    text: "She needs help with recording the heights and weights of the students in order to plan the right activities.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697950/range_image8_ttpzmx.png"
                  },
                  {
                    slideNo: 3,
                    text: "Brainni records the following heights: 180 cm, 240 cm, 215 cm, 170 cm, 135 cm, 225 cm, 250 cm, 190 cm, 260 cm, 165 cm, 195 cm, 145 cm, 305 cm, 275 cm, 155 cm, 330 cm, 200 cm, 335 cm, 220 cm, 140 cm, 310 cm, 235 cm, 245 cm, 150 cm, 320 cm, 170 cm, 285 cm, 270 cm, 175 cm, 300 cm. What is the range?",
                    dragItems: [
                      "A) 195",
                      "B) 200",
                      "C) 150",
                      "D) 185"
                    ],
                    correctAnswer: "B) 200"
                  },
                  {
                    slideNo: 4,
                    text: "Brainni records the following weights: 9 kg, 11 kg, 13 kg, 15 kg, 17 kg, 19 kg, 21 kg, 23 kg, 25 kg, 27 kg, 29 kg, 31 kg, 33 kg, 35 kg, 37 kg, 39 kg, 41 kg, 43 kg, 45 kg, 47 kg, 49 kg, 51 kg, 53 kg, 55 kg, 57 kg, 59 kg, 61 kg, 63 kg, 65 kg, 67 kg. What is the range?",
                    dragItems: [
                      "A) 48",
                      "B) 56",
                      "C) 60",
                      "D) 50"
                    ],
                    correctAnswer: "D) 58"
                  }
                ]
              },
              {
                level: 7,
                slides: [
                  {
                    slideNo: 1,
                    text: "Mrs. Dlamini’s friend, Zola is a chef and offers to make the students a delicious dessert after all the activities.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697925/range_image0_cbgh4v.png"
                  },
                  {
                    slideNo: 2,
                    text: "For dessert, Chef Zola experiments with different sugar quantities in grams.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697951/range_image10_wrx2gu.png"
                  },

                  {
                    slideNo: 3,
                    text: "The list of sugar quantities: 145g, 90g, 180g, 165g, 175g, 130g, 110g, 135g, 100g, 155g, 55g, 70g, 60g, 150g, 95g, 85g, 190g, 120g, 200g, 140g, 125g, 80g, 105g, 115g, 170g, 195g, 175g, 160g, 165g, 65g, 175g, 50g. What is the range of sugar quantities Chef Zola experimented with?",
                    dragItems: [ "A) 150g", "B) 155g", "C) 120g", "D) 200g" ],
                    correctAnswer: "A) 150g"
                  },
                  {
                    slideNo: 4,
                    text: "Chef Zola experiments with different quantities for the flour which will be used for a cake: 680g, 480g, 500g, 740g, 760g, 220g, 620g, 600g, 260g, 720g, 640g, 340g, 520g, 800g, 380g, 580g, 440g, 300g, 360g, 420g, 280g, 780g, 460g, 400g, 700g, 520g, 560g, 540g, 320g, 620g. What is the range?",
                    dragItems: [ "A) 580g", "B) 560g", "C) 720g", "D) 640g" ],
                    correctAnswer: "A) 580g"
                  }
                ]
              },
              {
                level: 8,
                slides: [
                  {
                    slideNo: 1,
                    text: "Chef Zola now wants to make the students his signature steak.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697958/range_image11_smvqrs.png"
                  },
                  {
                    slideNo: 2,
                    text: "He measures out the following quantities of salt: 1450mg, 1600mg, 1500mg, 800mg, 1350mg, 1950mg, 1550mg, 1000mg, 1850mg, 1700mg, 1200mg, 1300mg, 1050mg, 1255mg, 1550mg, 750mg, 1100mg, 1655mg, 1950mg, 1300mg. What is the range of salt quantities for seasoning the steak?",
                    dragItems: [
           "A) 1150",
            "B) 1200",
            "C) 1100",
            "D) 1050"
                    ],
                    correctAnswer: "A) 1150"
                  },
                  {
                    slideNo: 3,
                    text: "He meticulously measures out varying quantities of mixed spices in teaspoons. The quantities of spice blends he uses are: 7.5 tsp, 15 tsp, 1.5 tsp, 10.5 tsp, 4 tsp, 11 tsp, 3 tsp, 13.5 tsp, 14.5 tsp, 5 tsp, 8.5 tsp, 9 tsp, 12.5 tsp, 2 tsp, 14 tsp, 11.5 tsp, 10 tsp, 1 tsp, 6.5 tsp, 8 tsp. What is the range?",
                    dragItems: [
           "A) 14.5 tsp",
            "B) 15.5 tsp",
            "C) 13 tsp",
            "D) 14 tsp"
                    ],
                    correctAnswer: "D) 14 tsp"
                  }
                ]
              },
              {
                level: 9,
                slides: [
                  {
                    slideNo: 1,
                    text: "Brainni found Chef Zola's meals extremely impressive and was eager to experiment with some recipes.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697957/range_image12_rmvemd.png"
                  },
                  {
                    slideNo: 2,
                    text: "First, Brainni wants to purchase fruits. Here are the quantities Brainni plans to purchase: 8kg, 5kg, 9.5kg, 7.5kg, 10kg, 4kg, 11.5kg, 10.5kg, 1.8kg, 7kg, 3kg, 9kg, 4.5kg, 8.5kg, 6.5kg, 5.5kg, 6kg, 12kg, 11kg, 3.5kg, 2.5kg. What is the range of fruit quantities Brainni plans to buy?",
                    dragItems: [
           "A) 10.5kg",
            "B) 11.5kg",
            "C) 12kg",
            "D) 10.2kg"
                    ],
                    correctAnswer: "D) 10.2kg"
                  },
                  {
                    slideNo: 3,
                    text: "From the previous list: 8kg, 5kg, 9.5kg, 7.5kg, 10kg, 4kg, 11.5kg, 10.5kg, 1.8kg, 7kg, 3kg, 9kg, 4.5kg, 8.5kg, 6.5kg, 5.5kg, 6kg, 12kg, 11kg, 3.5kg, 2.5kg. Brainni decides that the 6kg, 7.5kg, and 12kg fruits are not needed. What is the new range?",
                    dragItems: [
            "A) 9.7kg",
            "B) 11.5kg",
            "C) 12kg",
            "D) 10.2kg"

                    ],
                    correctAnswer: "A) 9.7kg"
                  }
                ]
              },
              {
                level: 10,
                slides: [
                  {
                    slideNo: 1,
                    text: "Brainni finds out that Chef Zola has a Tik Tok account and wants to check it out for some inspiration.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697958/range_image13_tq32mb.png"
                  },
                  {
                    slideNo: 2,
                    text: "These are the mobile data costs per gigabyte (GB): R35.25, R25.75, R10.50, R30.50, R20.90, R50.00, R5.75, R45.50, R40.75, R15.25. What is the range?",
                    dragItems: [
            "A) R45.00",
            "B) R44.25",
            "C) R45.50",
            "D) R49.00"
                   ],
                    correctAnswer: "B) R44.25"
                  },
                  {
                    slideNo: 3,
                    text: "From the previous data cost per gigabyte (GB): R35.25, R25.75, R10.50, R30.50, R20.90, R50.00, R5.75, R45.50, R40.75, R15.25. Brainni finds out that the option to buy 1 gigabyte of data for R45.50 no longer exists. How does this change the range?",
                    dragItems: [ "A) Increase", "B) Decrease", "C) Stays the same", "D) Not enough data"

                    ],
                    correctAnswer: "C) Stays the same"
                  }
                ]
              }
            ]
          },
          {
            name: "Decimal",
            description: "This module helps students understand decimal concepts through various real-life scenarios and interactive challenges.",
            levels: [
              {
                level: 1,
                slides: [
                  {
                    slideNo: 1,
                    text: "Brainni’s classmate, Zama, works at the tuckshop",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718700069/dec_image10_lmh4ek.png"
                  },
                  {
                    slideNo: 2,
                    text: "He uses decimals to make it easier to deal with all the money and orders at the tuckshop.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718700084/dec_image2_guro2z.png"
                  },
                  {
                    slideNo: 3,
                    text: "Drag the correct answer to the box. Decimal fractions are numbers that consist of a ________.",
                    dragItems: [
                      "Whole number and a decimal point",
                      "Numerator and a denominator",
                      "Integer and a fraction",
                      "Fraction and a decimal point"
                    ],
                    correctAnswer: "Whole number and a decimal point"
                  }
                ]
              },
              {
                level: 2,
                slides: [
                  {
                    slideNo: 1,
                    text: "Zama sells ½ of the gummy bears at the tuckshop.  What is this fraction as a decimal?",
                    dragItems: [
                      "0.25",
                      "0.5",
                      "0.75",
                      "0.85"
                    ],
                    correctAnswer: "0.5"
                  },
                  {
                    slideNo: 2,
                    text: "Zama also sold ¾ of the snacks in the tuckshop. What is this fraction as a decimal?",
                    dragItems: [
                      "0.25",
                      "0.5",
                      "0.75",
                      "0.85"
                    ],
                    correctAnswer: "0.75"
                  }
                ]
              },
              {
                level: 3,
                slides: [
                  {
                    slideNo: 1,
                    text: "Zama notices that there are certain food that the school students really like and he wants to find the decimal fraction.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718700085/dec_image3_qxesha.png"
                  },
                  {
                    slideNo: 2,
                    text: "One food that students really like are the boerewors rolls and today Zama sold 7/10 of them. Convert this fraction into a decimal.",
                    dragItems: [
                      "0.07",
                      "7.0",
                      "0.7",
                      "0.071"
                    ],
                    correctAnswer: "0.7"
                  },
                  {
                    slideNo: 3,
                    text: "Another snack that the students like are chelsea buns but Zama only sold ⅝ of the them. What is this fraction as a decimal?",
                    dragItems: [
                      "0.25",
                      "0.50",
                      "0.625",
                      "0.75"
                    ],
                    correctAnswer: "0.625"
                  }
                ]
              },
              {
                level: 4,
                slides: [
                  {
                    slideNo: 1,
                    text: "The tuckshop Manager, Miss Fourie, put Zama in charge of the bake sale that the tuck shop is going to have",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718700092/dec_image4_dpl92n.png"
                  },
                  {
                    slideNo: 2,
                    text: "Zama bought 2.5 kg of flour and 1.75 kg of sugar. How much flour and sugar did he buy in total?",
                    dragItems: [
                      "4.25 kg",
                      "3.25 kg",
                      "4.75 kg",
                      "3.50 kg"
                    ],
                    correctAnswer: "4.25 kg"
                  },
                  {
                    slideNo: 3,
                    text: "Zama sold R13.45 and R7.89. How much will you spend if you bought both of them ?",
                    dragItems: [
                      "R21.34",
                      "R21.44",
                      "R21.34 ZAR",
                      "R21.54"
                    ],
                    correctAnswer: "R21.34"
                  }
                ]
              },
              {
                level: 5,
                slides: [
                  {
                    slideNo: 1,
                    text: "Zama wants to calculate the expenses for the bake sale",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718700093/dec_image5_tecbw0.png"
                  },
                  {
                    slideNo: 2,
                    text: "Zama had R 10.50 ZAR, he spent R6.25 on baking soda. How much money did he have left?",
                    options: [
                      "R4.25",
                      "R4.15",
                      "R 4.35",
                      "R 4.50 ZAR"
                    ],
                    correctAnswer: "R4.25"
                  },
                  {
                    slideNo: 3,
                    text: "Zama made  R8.75 kg of cookie dough for the bake sale. He used 3.85 kg of the dough to make cookies. How much dough is left for making other treats?",
                    options: [
                      "5.10 kg",
                      "4.90 kg",
                      "4.75 kg",
                      "4.80 kg"
                    ],
                    correctAnswer: "4.90 kg"
                  }
                ]
              },
              {
                level: 6,
                slides: [
                  {
                    slideNo: 1,
                    text: "Zama is enjoying selling at the cake sale.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718700059/dec_image6_n5zw5a.png"
                  },
                  {
                    slideNo: 2,
                    text: "Zama sold a R9.75 cookies and ¾  of a cake at the bake sale. Which amount is greater?",
                    options: [
                      "R 9.75",
                      "¾  of a cake",
                      "They are equal",
                      "Not enough information"
                    ],
                    correctAnswer: "R 9.75"
                  },
                  {
                    slideNo: 3,
                    text: "Which amount is less between 2.50 kg of flour and ⅝  kg of sugar for baking?",
                    options: [
                      "2.50 kg",
                      "5/8 kg of sugar",
                      "They are equal",
                      "Not enough info provided"
                    ],
                    correctAnswer: "5/8 kg of sugar"
                  }
                ]
              },
              {
                level: 7,
                slides: [
                  {
                    slideNo: 1,
                    text: "After the bake sale, Miss Fourie gives Zama instructions on how to measure the sugar to sprinkle on some treats",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718697951/range_image10_wrx2gu.png"
                  },
                  {
                    slideNo: 2,
                    text: "She gives Zama some instructions in decimal form and the others in fraction form.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718700060/dec_image8_rwpemr.png"
                  },
                  {
                    slideNo: 3,
                    text: "Choose the correct Comparison symbol ⅘ g of sugar ___ 0.65 g of sugar",
                    options: [
                      ">",
                      "<",
                      "=",
                      "None"
                    ],
                    correctAnswer: ">"
                  },
                  {
                    slideNo: 4,
                    text: "Choose the correct Comparison symbol 3/4 g of sugar ___ 0.75 g of sugar",
                    options: [
                      ">",
                      "<",
                      "=",
                      "None"
                    ],
                    correctAnswer: "="
                  }
                ]
              },
              {
                level: 8,
                slides: [
                  {
                    slideNo: 1,
                    text: "Zama is helping Mrs. Fourie sell more of the famous chelsea buns",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718700067/dec_image9_xayi5d.png"
                  },
                  {
                    slideNo: 2,
                    text: "After first break they sold Zama 3.5 dozen cupcakes at the bake sale. If each dozen weighs 0.5 kg, how many kilograms of cupcakes did he sell?",
                    options: [
                      "2.25 kg",
                      "0.5 kg",
                      "3.5 kg",
                      "1.75 kg"
                    ],
                    correctAnswer: "1.75 kg"
                  },
                  {
                    slideNo: 3,
                    text: "The 3.5 dozen chelsea buns they sold during first break cost R15.75 per dozen, How much money did they earn from selling the chelsea buns ?",
                    options: [
                      "R45.125",
                      "R55.125",
                      "R65.125",
                      "R70.54"
                    ],
                    correctAnswer: "R55.125"
                  }
                ]
              },
              {
                level: 9,
                slides: [
                  {
                    slideNo: 1,
                    text: "Zama is learning how to change decimals into fractions, so he can be even more helpful at the tuckshop.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718700069/dec_image10_lmh4ek.png"
                  },
                  {
                    slideNo: 2,
                    text: "What is 0.25 in fraction form",
                    options: [
                      "5/8",
                      "3/4",
                      "5/10",
                      "1/4"
                    ],
                    correctAnswer: "1/4"
                  },
                  {
                    slideNo: 3,
                    text: "What is 0.625 in fraction form",
                    options: [
                      "5/8",
                      "3/4",
                      "5/10",
                      "1/4"
                    ],
                    correctAnswer: "5/8"
                  }
                ]
              },
              {
                level: 10,
                slides: [
                  {
                    slideNo: 1,
                    text: "Zama wants to do more challenging questions.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718700075/dec_image11_rlalot.png"
                  },
                  {
                    slideNo: 2,
                    text: "Convert 0.5 to a fraction and add it to 3/4. What is the result?",
                    options: [
            "1 1/4",
            "1 1/2",
            "1 1/3",
            "1 3/4"
                    ],
                    correctAnswer: "1 1/4"
                  },
                  {
                    slideNo: 3,
                    text: "What is the result when you add 0.75 to 2/5?",
                    options: [
            "1 3/20",
            "1 3/10",
            "18/20",
            "1 3/8"
                    ],
                    correctAnswer: "1 3/20"
                  }
                ]
              }
            ]
          }
        ,
        {
            name: "Area",
            description: "This module helps students understand the concept of area through engaging scenarios and practical examples, using various shapes and real-life applications.",
            levels: [
              {
                level: 1,
                slides: [
                  {
                    slideNo: 1,
                    text: "One of Brainni’s classmates, Lethabo, lives in the vibrant city of Johannesburg.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701472/area_image1_lirae9.png"
                  },
                  {
                    slideNo: 2,
                    text: "Lethabo loves to explore and one day went to a park where he saw little kids playing hopscotch, each square had its own area.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701473/area_image2_uwzcdk.png"
                  },
                  {
                    slideNo: 3,
                    text: "Drag the correct answer inside the box.\nArea is the measure of the _______ of a two-dimensional shape.",
                    dragItems: [
                      "amount of space inside",
                      "total number of unit squares",
                      "surface covered by the shape",
                      "the size of"
                    ],
                    correctAnswer: "amount of space inside"
                  }
                ]
              },
              {
                level: 2,
                slides: [
                  {
                    slideNo: 1,
                    text: "Lethabo walks over to one of the squares and measures the length and the width.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701483/area_image3_gwobsl.png"
                  },
                  {
                    slideNo: 2,
                    text: "The square is 4 meters long and 4 meters wide. What is the area of the square in square meters?",
                    dragItems: [
                      "9 square meters",
                      "10 square meters",
                      "16 square meters",
                      "14 square meters"
                    ],
                    correctAnswer: "16 square meters"
                  },
                  {
                    slideNo: 3,
                    text: "He sees a square that is a bit smaller: 3 meters long and 3 meters wide. What is the area of the square in square meters?",
                    dragItems: [
                      "9 square meters",
                      "10 square meters",
                      "16 square meters",
                      "14 square meters"
                    ],
                    correctAnswer: "9 square meters"
                  }
                ]
              },
              {
                level: 3,
                slides: [
                  {
                    slideNo: 1,
                    text: "Lethabo now considers the entire hopscotch court.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701484/area_image4_uxzrem.png"
                  },
                  {
                    slideNo: 2,
                    text: "If each square in a hopscotch court measures 1 meter by 1 meter, and the court is 3 squares wide and 5 squares long, what is the total area of the hopscotch court?",
                    dragItems: [
                      "1 square meter",
                      "12 square meters",
                      "15 square meters",
                      "18 square meters"
                    ],
                    correctAnswer: "15 square meters"
                  },
                  {
                    slideNo: 3,
                    text: "The park has a rectangular hopscotch court with dimensions 4 meters by 3 meters. If each hopscotch square measures 0.5 meters by 0.5 meters, how many squares are there in the hopscotch court?",
                    dragItems: [
                      "12 squares",
                      "16 squares",
                      "24 squares",
                      "48 squares"
                    ],
                    correctAnswer: "48 squares"
                  },
                  {
                    slideNo: 4,
                    text: "What is the total area of a hopscotch court in the park that has 10 squares and each square is 1 meter by 1 meter?",
                    dragItems: [
                      "5 square meters",
                      "10 square meters",
                      "15 square meters",
                      "20 square meters"
                    ],
                    correctAnswer: "10 square meters"
                  }
                ]
              },
              {
                level: 4,
                slides: [
                  {
                    slideNo: 1,
                    text: "Lethabo sees his best friend, Joshua, playing basketball on the other side of the park.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701521/area_image5_nsl3gd.png"
                  },
                  {
                    slideNo: 2,
                    text: "As he’s walking there he wonders to himself, “What is the area of a standard basketball court if its dimensions are 28 meters by 15 meters?”",
                    dragItems: [
                      "420 square meters",
                      "392 square meters",
                      "380 square meters",
                      "210 square meters"
                    ],
                    correctAnswer: "420 square meters"
                  },
                  {
                    slideNo: 3,
                    text: "What if a basketball court is circular with a radius of 9 meters, what is the approximate area of the semicircle of the court?",
                    dragItems: [
                      "40.5π square meters",
                      "27 square meters",
                      "81π square meters",
                      "18π square meters"
                    ],
                    correctAnswer: "40.5π square meters"
                  }
                ]
              },
              {
                level: 5,
                slides: [
                  {
                    slideNo: 1,
                    text: "Joshua also has a few questions about the area.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701522/area_image6_dp5vva.png"
                  },
                  {
                    slideNo: 2,
                    text: "If the dimensions of the entire basketball court are 15 meters by 14 meters, what is the area of the half-court in basketball?",
                    dragItems: [
                      "105 square meters",
                      "210 square meters",
                      "240 square meters",
                      "420 square meters"
                    ],
                    correctAnswer: "105 square meters"
                  },
                  {
                    slideNo: 3,
                    text: "What is the area of the key (free-throw lane) in a basketball court if it is a rectangle with dimensions 4 meters by 5 meters, and there are two circles with a radius of 1.25 meters each at the ends?",
                    dragItems: [
                      "20 square meters",
                      "29.8 square meters",
                      "25 square meters",
                      "27.5 square meters"
                    ],
                    correctAnswer: "29.8 square meters"
                  }
                ]
              },
              {
                level: 6,
                slides: [
                  {
                    slideNo: 1,
                    text: "After a few games of basketball, Lethabo and Joshua decide to go to the skating rink at the nearby mall.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701522/area_image7_btrz3n.png"
                  },
                  {
                    slideNo: 2,
                    text: "If a circular skating rink has a diameter of 30 meters, what is its area?",
                    dragItems: [
                      "450 square meters",
                      "600 square meters",
                      "706.86 square meters",
                      "1350 square meters"
                    ],
                    correctAnswer: "706.86 square meters"
                  },
                  {
                    slideNo: 3,
                    text: "If an enormous skating rink has a rectangular ice surface surrounded by a circular track, and the dimensions of the ice surface are 150 meters by 250 meters, what is the area?",
                    dragItems: [
                      "6250 square meters",
                      "37500 square meters",
                      "9300 square meters",
                      "11050 square meters"
                    ],
                    correctAnswer: "37500 square meters"
                  }
                ]
              },
              {
                level: 7,
                slides: [
                  {
                    slideNo: 1,
                    text: "They enter the skating rink and find that it has a rectangular surface surrounded by a circular track.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701536/area_image8_mhu7yl.png"
                  },
                  {
                    slideNo: 2,
                    text: "The circular track has a diameter of 40 meters. What is the area?",
                    dragItems: [
                      "678.54 square meters",
                      "801.84 square meters",
                      "1026.57 square meters",
                      "1256.64 square meters"
                    ],
                    correctAnswer: "1256.64 square meters"
                  },
                  {
                    slideNo: 3,
                    text: "The dimensions of the ice surface are 15 meters by 25 meters, and the circular track has a diameter of 40 meters. What is the total area of the skating rink?",
                    dragItems: [
                      "2781.43 square meters",
                      "1631.64 square meters",
                      "6024.67 square meters",
                      "11050 square meters"
                    ],
                    correctAnswer: "1631.64 square meters"
                  }
                ]
              },
              {
                level: 8,
                slides: [
                  {
                    slideNo: 1,
                    text: "Lethabo thinks back to the hopscotch court he visited earlier.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701536/area_image9_woe75w.png"
                  },
                  {
                    slideNo: 2,
                    text: "If the park decides to expand the hopscotch court to 6 meters by 5 meters, and each square remains 0.5 meters by 0.5 meters, what is the increase in the area of the hopscotch court?",
                    dragItems: [
                      "130",
                      "100",
                      "90",
                      "120"
                    ],
                    correctAnswer: "120"
                  },
                  {
                    slideNo: 3,
                    text: "If the hopscotch court in the park is irregularly shaped and has a width of 2 meters and a length of 4 meters, but there's a triangular section missing in one corner with a base of 1 meter and a height of 2 meters, what is the area?",
                    dragItems: [
                      "6 square meters",
                      "7 square meters",
                      "8 square meters",
                      "9 square meters"
                    ],
                    correctAnswer: "7 square meters"
                  }
                ]
              },
              {
                level: 9,
                slides: [
                  {
                    slideNo: 1,
                    text: "After skating, Lethabo and Joshua head to the food court.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701537/area_image10_unbidm.png"
                  },
                  {
                    slideNo: 2,
                    text: "A food court has a rectangular seating area with dimensions 30 meters by 40 meters, and a rectangular counter area with dimensions 10 meters by 20 meters. What is the total area?",
                    dragItems: [
                      "1765 square meters",
                      "2136 square meters",
                      "2400 square meters",
                      "1400 square meters"
                    ],
                    correctAnswer: "1400 square meters"
                  },
                  {
                    slideNo: 3,
                    text: "If an area in the food court has an irregular shape and is divided into different sections, with the rectangular section measuring 4 meters by 6 meters and the triangular section adjacent to it having a base of 3 meters and a height of 4 meters, what is the total area?",
                    dragItems: [
                      "24 square meters",
                      "28 square meters",
                      "30 square meters",
                      "32 square meters"
                    ],
                    correctAnswer: "30 square meters"
                  }
                ]
              },
              {
                level: 10,
                slides: [
                  {
                    slideNo: 1,
                    text: "Joshua wants pizza and Lethabo wants pastries. They first go to the pizza store, then to the bakery.",
                    image: "https://res.cloudinary.com/dqkqxq4ss/image/upload/v1718701472/area_image11_yxl89z.png"
                  },
                  {
                    slideNo: 2,
                    text: "The pizza shop has a circular dining area with a radius of 12 meters, a rectangular kitchen with dimensions 8 meters by 15 meters, and a triangular storage room with a base of 10 meters and a height of 6 meters. What is the total area of the restaurant?",
                    dragItems: [
                      "215.36 square meters",
                      "1364.16 square meters",
                      "497.50 square meters",
                      "602.39 square meters"
                    ],
                    correctAnswer: "602.39 square meters"
                  },
                  {
                    slideNo: 3,
                    text: "The bakery has a square baking area with sides of 10 meters, a circular display counter with a radius of 6 meters, and a triangular delivery area with a base of 8 meters and a height of 5 meters. What is the total area of the bakery?",
                    dragItems: [
                      "233.10 square meters",
                      "306.28 square meters",
                      "345.43 square meters",
                      "381.56 square meters"
                    ],
                    correctAnswer: "233.10 square meters"
                  }
                ]
              }
            ]
          }
          
          
          
          
        

];

// Connect to MongoDB and seed data
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected...');
  return Topic.deleteMany({});
})
.then(() => {
  return Topic.insertMany(topicData);
})
.then(() => {
  console.log('Data seeded successfully');
  mongoose.disconnect();
})
.catch(err => {
  console.error('Error seeding data:', err);
});


