import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Customers = () => {
  useEffect(() => {
    AOS.init({duration:1000});
  }, []);

  return (
    <div >
      <section className="my-10 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center mx-auto  md:p-10 md:px-12">
          <h1 className=" text-4xl font-semibold leading-none text-center my-text-2">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div  data-aos="fade-right"   className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-400"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                I recently ordered from <span className="font-bold my-text-1">Kidland Baby Toy Store</span> online, and I was extremely pleased with my experience.The website was user-friendly, making it easy to navigate and find the toys I was looking for.  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-400"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src="https://xsgames.co/randomusers/assets/avatars/female/4.jpg"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
              />
              <p className="text-xl font-semibold leading-tight">
              Amparo Lippincott
              </p>
              <p className="text-sm uppercase">Dhaka</p>
            </div>
          </div>
          <div  data-aos="fade-left"  className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-400"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Shopping at <span className="font-bold my-text-1">Kidland Baby Toy Store</span> online was a breeze. The website was well-designed and visually appealing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-400"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src="https://xsgames.co/randomusers/assets/avatars/female/5.jpg"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
              />
              <p className="text-xl font-semibold leading-tight">
              Ivonne Escarsega
              </p>
              <p className="text-sm uppercase">New York</p>
            </div>
          </div>
          <div data-aos="fade-up-right"   className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-400"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <span className="font-bold my-text-1">Kidland Baby Toy Store</span> online platform is fantastic. I love the convenience of being able to shop for high-quality toys from the comfort of my home. The website is intuitive and easy to navigate, allowing me to quickly find what I need.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-400"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src="https://xsgames.co/randomusers/assets/avatars/female/6.jpg"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
              />
              <p className="text-xl font-semibold leading-tight">
              Keren Kratina
              </p>
              <p className="text-sm uppercase">London</p>
            </div>
          </div>
          <div  data-aos="fade-up-left"  className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-400"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                I recently discovered <span className="font-bold my-text-1">Kidland Baby Toy Store</span>  online store, and I could not be happier with my purchase. The website is well-organized, making it simple to browse through their diverse toy collection.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-400"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src="https://xsgames.co/randomusers/assets/avatars/female/7.jpg"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
              />
              <p className="text-xl font-semibold leading-tight">
              Lauri Slayton
              </p>
              <p className="text-sm uppercase">Paris</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;
