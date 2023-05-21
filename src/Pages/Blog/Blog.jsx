import React from "react";
import TitleBanner from "../../SharedPages/TitleBanner";

const Blog = () => {
  return (
    <div>
      <TitleBanner text={`Kidland | Blogs`} />

      <div className="bg-gray-800 text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">May 21, 2023</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900"
            >
              JWT
            </a>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="hover:underline dark:text-gray-400">
                  Leroy Jenkins
                </span>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </a>
            <p className="mt-2">
              An access token is a credential that is used to access protected
              resources. It is typically issued by an authorization server in
              response to a user's authentication request. Access tokens are
              typically short-lived, expiring after a few hours or days.
              <br />
              <br />
              A refresh token is a credential that can be used to obtain new
              access tokens. It is typically issued by an authorization server
              in addition to an access token. Refresh tokens are typically
              long-lived, expiring after several months or even years.
              <br />
              <br />
              Access tokens and refresh tokens are typically stored on the
              client-side, in the browser's local storage or IndexedDB. They can
              also be stored on the server-side, but this is typically not
              recommended for security reasons.
              <br />
              <br />
              Access tokens and refresh tokens should be stored securely. They
              should be encrypted and access to them should be restricted to
              authorized users.
              <br />
              <br />
              Here are some best practices for storing access tokens and refresh
              tokens:
            </p>
            <ol>
              <li>
                Use a strong encryption algorithm to encrypt access tokens and
                refresh tokens.
              </li>
              <li>
                Store access tokens and refresh tokens in a secure location.
              </li>
              <li>
                Restrict access to access tokens and refresh tokens to
                authorized users.
              </li>
              <li> Rotate access tokens and refresh tokens regularly.</li>
            </ol>
          </div>
        </div>
        <hr />
      </div>

      <div className="bg-gray-800 text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">May 21, 2023</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900"
            >
              Database
            </a>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="hover:underline dark:text-gray-400">
                  Jhon Doe
                </span>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              Compare SQL and NoSQL databases?
            </a>
            <p className="mt-2">
              <b>SQL databases</b>
              SQL databases are the most common type of database. They use a
              structured query language (SQL) to store and retrieve data. SQL
              databases are organized into tables, which are made up of rows and
              columns. Each row represents a single record, and each column
              represents a single piece of data about that record.
              <br />
              <br />
              SQL databases are very efficient for storing and retrieving
              structured data. They are also very well-supported by a wide range
              of tools and applications.
              <br />
              <br />
              <b>NoSQL databases</b>
              <br />
              NoSQL databases are a newer type of database that are designed to
              store and retrieve unstructured data. Unstructured data is data
              that does not fit into a traditional relational database schema.
              For example, unstructured data can include text, images, and
              videos.
              <br />
              <br />
              NoSQL databases offer a number of advantages over SQL databases
              for storing and retrieving unstructured data. They are typically
              more scalable and flexible than SQL databases. They can also be
              more efficient for storing and retrieving large amounts of data.
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className="bg-gray-800 text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">May 21, 2023</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900"
            >
              NodeJS framework
            </a>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://xsgames.co/randomusers/assets/avatars/male/9.jpg"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="hover:underline dark:text-gray-400">
                  Jahsim Uddin
                </span>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is express js? What is Nest JS?
            </a>
            <p className="mt-2">
              Express.js is a minimal and flexible Node.js web application
              framework that provides a robust set of features for building web
              applications. It is designed to be easy to use and extend, and it
              is used by a large number of developers worldwide.
              <br />
              <br />
              Nest.js is a framework built on top of Express.js that provides a
              more opinionated and structured approach to building web
              applications. It uses TypeScript, a typed superset of JavaScript,
              and it provides a number of features that make it easier to build
              scalable and maintainable web applications.
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className="bg-gray-800 text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">May 21, 2023</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900"
            >
              MongoDB
            </a>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://xsgames.co/randomusers/assets/avatars/male/10.jpg"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="hover:underline dark:text-gray-400">
                  Jhankar Mahbub
                </span>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is MongoDB aggregate and how does it work ?
            </a>
            <p className="mt-2">
              MongoDB aggregate is a feature that allows you to perform complex
              operations on your data. It is a powerful tool that can be used to
              analyze data, identify trends, and generate reports.
              <br />
              <br />
              MongoDB aggregate works by using a pipeline of stages. Each stage
              performs an operation on the data, and the output of one stage is
              passed to the next stage. The final stage of the pipeline returns
              the results of the aggregation.
              
              
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Blog;
