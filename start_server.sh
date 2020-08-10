#Starts an apache docker container to host the game page
sudo docker stop harmony-apache-app
sudo docker rm harmony-apache-app
sudo docker run -dit --name harmony-apache-app -p 31337:80 -v /home/boop/Documents/GoshDarnGames/harmony:/usr/local/apache2/htdocs/ httpd:2.4
