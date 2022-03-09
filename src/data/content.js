const content = [
  {
    "title":"Personal",
    "id":"1",
    "type":"category",
    "text":"This category is for Personal experiences",
    "color":"grey",
    "subcategory":[
    {
      "title":"Travel Experiences",
      "type":"subcategory",
      "id":"c1",
      "text":"This is a category for sharing all your travel experiences",
      "article": [
      {
        "title": "My trip to Ladakh",
        "id":"i2",
        "type":"article",
         "text":"This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh..This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh. This is an article about my travel to Ladakh",
        "author":"Sarita Kalyani",
        "datecreated":"20/12/2021",
        "bookmarked":"true",
        "liked":"false",
        "likes":5,
        "comments": [
        {
              "commentedBy": "Sarita",
              "commentText":"This is a test comment",
              "commentedOn": "12-12-2021"
        },
        {
              "commentedBy": "Miri",
              "commentText":"This is a test comment by Miri",
              "commentedOn": "12-12-2021"
        }
          ],
      },
        

      {
          "title": "My trip to Goa",
          "id":"i2",
          "subcategory":"Travelling",
          "text":"This is an article about my travel to Goa"
      }
          ] //article closing
    }
              ]
  },

  {
        "title":"Technology",
            "id":"2",
            "color":"lgreen",
            "subcategory":[

    {
                "title":"Cloud Migration",
                "id":"c1",
                "text":"This is a category for sharing all your travel experiences",
                "article": [
      {
                  "title": "First Migration to Cloud in Payroll",
                  "id":"i2",
                   "text":"Article for GCP"
      }]
    },
    {
      "title":"Production Issues",
      "id":"c1",
      "text":"This is a category for sharing all your recent production issues",
      "article": [
{
        "title": "Java Issue",
        "id":"i2",
         "text":"Java logger issue"
}]
} 

              ] 
  },



  {
    "title":"ABC Programs & Events",
        "id":"2",
        "color":"pink",
        "subcategory":[

    {
            "title":"Tech Program",
            "id":"c1",
            "text":"This is a category for sharing all your program experiences",
            "article": [
      {
              "title": "Participation in Tech Program",
              "id":"i2",
               "text":"Article for program participation"
      }]
    } 

          ] 
},
{
  "title":"Hobbies",
      "id":"2",
      "color":"dgreen",
      "subcategory":[

  {
          "title":"Reading",
          "id":"c1",
          "text":"Book Readers Corner",
          "article": [
    {
            "title": "Charles Dickens books",
            "id":"i2",
             "text":"Article in books 1"
    }]
  } 

        ] 
},
          
            



          ]
 



export default content
