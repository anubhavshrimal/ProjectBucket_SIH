# Front End Development Documentation

### Installation steps:
1. Clone the repository into your local computer:

	git clone https://github.com/anubhavshrimal/ProjectBucket_SIH.git
2. Run the following command to install all the dependencies:

	npm install
3. Run the following command to run the typescript trans-compiler and start the lite server:

	npm start

------------------------------------------------------------------------------

### REST APIs:


    #### request POST 
    #### url /webapi/project/insert/:username
    #### request
    {

      "title":"Army portal",

      "description":"all in one army portal",

      "project_url":"www.armysocial.com",

      "tags": ["army","Social","java","mongo"],

      "likes": 123,

      "comments": [],

      "contributors": ["singhsahab"],

      "license": "apache",

      "readme":"welcome",

      "private": "false",

      "video_url":["https://www.youtube.com/watch?v=PEqbPzVQYqU"],

      "zip_file":[], 

      "images":["http://pics.com"] 

}
response
{
  
                                                       
  "matchedCount": "matchedCount=1",  

  "modifiedCount": " modifiedCount=1",

  "upsertedId": " upsertedId=null"

}

------------------------------------------------------------------------------

  #### request GET 
  #### url /webapi/project/retrieveall/:username 
  #### response
[ 
     { 
	    "contributors": [], 
        "description": "Helping Police", 
        "images": [], 
        "index": 0, 
        "like": 0,
        "title": "Police Helper", 
        "zipfile": [] 
    }, 
 
     { 
       "contributors": [],
       "description": "an Online Office", 
       "images": [], 
       "index": 0, 
       "like": 0, 
       "title": "office", 
       "zipfile": [] 
      },
	  
     { 
	   "contributors": [], 
	   "description": "On My Way", 
	   "images": [], 
	   "index": 0, 
	   "like": 0, 
	   "title": 
	   "Googo", 
	   "zipfile": [] 
	  },
	 { 
	   "contributors": [], 
	   "description": "all in one army portal", 
	   "images": [], 
	   "index": 0, 
	   "like": 0, 
	   "title": "Army portal", 
	   "zipfile": [] 
	 }
	 
]

------------------------------------------------------------------------------


    #### request POST 
                                             
    #### url /webapi/project/insertcomment/:username/:Googo 


    #### request
    {
	"username":"sjsidjain",
	"comment":"greeting from postman"
     } 

    #### response
    { 
      "matchedCount": "matchedCount=1", 
      "modifiedCount": " modifiedCount=1", 
      "upsertedId": " upsertedId=null" 
     }


------------------------------------------------------------------------------

   #### request GET 
   #### url /webapi/project/retrievecomments/:username/Googo 

   #### response
    [ 
        { 
           "comment": "greeting from postman", 
           "date": "2017-03-18T15:28:18.243",  
           "username": "sjsidjain" 
        } 
    ]
------------------------------------------------------------------------------

  #### request GET 
  #### url /webapi/user/profile/:username
  
  #### response
  {
    "username": "rahulsingh", 
    "name": "Rahul Singh", 
    "bio": "Student", 
    "phone_no": "9876543210",  
    "email_id": "rahulsingh1@gmail.com", 
    "linkedin_id": "http://linked.in/profile/rahulsingh", 
    "github_id": "http://github/profie/rsingh", 
    "country": "India", "state": "Rajasthan", 
    "city": "Jaipur", 
    "zipcode": "302001", 
    "contributing": [ "azure", "microsoft" ], 
    "favourite_tags": [ "C++", "Android", "Java", "nature" ], 
    "followers": [ "Anshul" ], 
    "following": [ "Rajan" ] 
  }


------------------------------------------------------------------------------


  #### request PUT 
  #### url /webapi/user/updateuser 

  #### request 
  { 
   "username": "pjain", 
   "name": "Priyanka Jain", 
   "bio": "Tech evangelist", 
   "phone_no": "7782036418", 
   "email_id": "priyankajain@gmail.com", 
   "linkedin_id": "http://linked.in/profile/priyankajain55", 
   "github_id": "http://github/profie/priyankajain", 
   "country": "India", "state": "Rajasthan", 
   "city": "Udaipur", "zipcode": "2017", 
   "contributing": [ "azure", "amazon" ], 
   "favourite_tags": [ "Apex", "Android", "Java", "hadoop" ], 
   "followers": [ "james", "leo" ],  
   "following": [ "kathy" ] 
   }

   #### response
    { 
      "matchedCount": "matchedCount=1", 
      "modifiedCount": " modifiedCount=1", 
      "upsertedId": " upsertedId=null" 
     }
------------------------------------------------------------------------------
