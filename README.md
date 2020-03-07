# A koa-mongo API exercise

In order to be of some use to [this awesome open-source project](https://github.com/CaenCamp/jobs-caen-camp),
I gotta learn how to deal with Koa and mongoose.

This is the smallest to-do api there can be. Yet to do :

- [ ] implement the checking/unchecking of the `done` boolean that goes with each item

The goal is, ultimately, to dockerize everything with docker-compose. We have two services :

* Mongo
* Node

## It works !

Try it at home ;-)
Be sure to have docker and docker-compose installed


``` sh
git clone https://github.com/Keksoj/koa-mongo-docker.git
cd koa-mongo-docker
docker-compose up
```

Go check <http://localhost>.

