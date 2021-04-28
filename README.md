**NOTE**: This app is deployed using custom github action directly to S3 as an SPA.
404 routing error is returned from AWS S3 as "#!/" prefixed to the URL and 
the react app checks for anything after "#!/" and adds that to the URL so that
the react-router-dom can navigate to that page directly.

Check the output in below URLS:
1. http://staticpage-react-spa-websitebucket75c24d94-1octohrd0r4um.s3-website-us-east-1.amazonaws.com/  -> goes to "home" page in SPA
2. http://staticpage-react-spa-websitebucket75c24d94-1octohrd0r4um.s3-website-us-east-1.amazonaws.com/users -> goes to "users" page in SPA


Also, this app was created using CRA and "react-router-dom" is used for routing in SPA.
