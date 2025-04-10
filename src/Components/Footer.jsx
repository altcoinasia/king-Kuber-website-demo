const Footer = () => {
  return (
    <div>
      <footer
        className="z-20 w-full mt-10 border-gray-200 shadow p-4 sm:p-6 md:flex md:items-center md:justify-between dark:bg-gray-800 dark:border-gray-600"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
        }}
      >
        <p className="text-sm text-gray-500 text-center md:text-left w-full dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </p>
        <div className="mt-4 md:mt-0 text-center md:text-right w-full">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Managed by King Kalyan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
