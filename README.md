## Cookbook
#### What is this project?
This is a project that I made along with other students for a university class in 2022. The code was transfered from university repo and was not changed in any way. 

The goal of the class was to make a cloud web application using JavaScript. The client portion of the application is made using [React](https://react.dev/) with additional libraries like [notistack](https://notistack.com/) and [formik](https://formik.org/). The server side is made in [ExpressJS](https://expressjs.com/) with [Zod](https://zod.dev/) for validation of request data. For persistance, we decided to use MongoDB.

The vision behind the application is to create an application where users can share their recipes with others. It's pretty much just like any other online cookbook.

#### How can I try it?
Since it was created as a class project, the application is not deployed anywhere. If you'd like to run it locally, just add `.env` files to `/server` with the following attributes:

```
PORT=3001
DB_URI=string (e.g. MongoDB connection string)
```

And then just run the client and server apps.


<br />
<br />
Marek Balvin, 2025
