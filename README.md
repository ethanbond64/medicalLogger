Mediacal Log Application Prototype

Problem:
- Many people have offline medical history, old forms/files...
- Many doctors offices still use print forms and keep data offline, or not shared on existing data networks

^ These lead to doctors being uninformed on conditions, making it difficult to find the right way to treat
Information that might be vital to the assessment of the patient might only exist offline

Give patients the ability to catlog this data with minimal work


Use Case:
- Patient uploads documents and adds title (optional)
- Application scrapes data from the form and digitizes it
- Application allows user to provide others (doctors/nurse) secure access to their files


Views:
- Upload page -> Upload picture (button for camera too) -> title input
- Document list -> react/tailwind grid **Add search if you have time
- Share page -> click button give url **This can just be a button on the main form

Data Model:
Files - 
 - id
 - title
 - formType - string (generated)
 - formDate - datetime (generated)
 - formContent - string  - all content in the document (for search) (generated)
 - formInfo - json  - future feature(generated)
 - path (path in uploads folder)

Routes:
- Upload - accept a file/file image, scrape it, safe to db
- List - list all contents in the db, ideally with search - use query params
- Share - Get a list of files (or if no time default list of all files) add ass query params to the list url - return this link

CV -> just scrape all words off of the file