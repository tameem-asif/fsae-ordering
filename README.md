# CU Formula Racing Ordering Website

This is a website that was intnded to serve as the parts ordering platform for the CU Formula Racing team. Currently, it is a minimum viable product for a custom parts ordering platform that can be changed relatively easily to accomodate any type of (student) organization. CUFR ended up not implementing this ordering solution as the team switched to Jira in 2022 and wanted to keep everything on the same platform. 

With some additional work, this MVP can become a much more robust web app with Google SSO added as well as functionality to make the data table more readable.

Overall, I am happy with how this project turned out. I learned a ton about Nodejs, Expressjs, and MongoDB. I also learned how much of a pain it is to write a decent looking frontend using only plain HTML/CSS. Hopefully, at some point in the future, I get the chance to work more with this web app and have some organization use it in their workflow.

## Further Info

Currently, the website is being hosted on AWS using a custom Expressjs webserver. The backend database is a MongoDB Atlas shared cluster. To access the database for public viewing, I also implemented a minimal REST API using the same Expressjs webserver. The frontend is all written using vanilla HTML/CSS.

If I work on this project further, I will implement authentication using "Sign in with Google" so that only people with a columbia.edu or barnard.edu email address can make an account to access the ordering sheet and the database. This will greately improve security for the entire website.
