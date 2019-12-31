# Build the front end with Docker 

To build the image, run from root file : 

`docker build -t [your_dockerhub_id]/carrier-front .`

Then to run the container : 

`docker run --rm --name carrier-front -p 8888:3000 -d [your_dockerhub_id]/carrier-front`

If you wish to stop the container, then run `docker stop carrier-front` (it will remove the container too).

## Docker Hub integration

Once you are logged in with `docker login -u [your_dockerhub_id]`, you can push this image to Docker Hub with : 
`docker push mariushull/carrier-front:tagname`
 If you wish to pull this image (latest release), you can do it with :
 `docker pull mariushull/carrier-front:latest`