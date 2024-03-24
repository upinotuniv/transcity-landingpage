import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="flex items-center flex-col md:flex-row md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://www.instagram.com/raf.corleone/"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 124 124"
                  width="32"
                  height="32"
                  id="instagram"
                >
                  <path
                    fill="#333033"
                    d="M87.2 33.6c-3.1 0-5.6 2.5-5.6 5.6 0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-3.1-2.5-5.6-5.6-5.6zm-25 7.2c-13 0-23.6 10.6-23.6 23.6S49.2 88 62.2 88s23.6-10.6 23.6-23.6-10.6-23.6-23.6-23.6zm0 38.8c-8.4 0-15.1-6.8-15.1-15.1 0-8.4 6.8-15.1 15.1-15.1 8.4 0 15.1 6.8 15.1 15.1s-6.8 15.1-15.1 15.1zm47.7-34.8C109.9 28.9 97 16 81.1 16H43c-15.9 0-28.8 12.9-28.8 28.8v38.1c0 15.9 12.9 28.8 28.8 28.8h38c15.9 0 28.8-12.9 28.8-28.8V44.8zm-9.1 38c0 10.9-8.9 19.8-19.8 19.8H43c-10.9 0-19.8-8.9-19.8-19.8v-38C23.2 33.8 32 25 43 25h38c10.9 0 19.8 8.9 19.8 19.8v38z"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.tiktok.com/@raf.corleone"
                aria-label="Tiktok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  id="tiktok"
                >
                  <path d="M6.977 15.532a2.791 2.791 0 0 0 2.791 2.792 2.859 2.859 0 0 0 2.9-2.757L12.7 3h2.578A4.8 4.8 0 0 0 19.7 7.288v2.995a4.676 4.676 0 0 1-.443.022 4.8 4.8 0 0 1-4.02-2.172v7.4a5.469 5.469 0 1 1-5.469-5.469c.114 0 .226.01.338.017v2.7a2.909 2.909 0 0 0-.338-.034 2.791 2.791 0 0 0-2.791 2.785Z"></path>
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.facebook.com/profile.php?id=61553168930423"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 100 100"
                  id="facebook"
                >
                  <path d="M38.078 22.431v12.391H29v15.152h9.078V95h18.648V49.975H69.24s1.172-7.265 1.74-15.209H56.797v-10.36c0-1.548 2.033-3.631 4.043-3.631H71V5.001H57.186C37.617 5 38.078 20.167 38.078 22.431"></path>
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-xs md:text-sm text-gray-600 mr-4">
            &copy; Trans City. Hak Cipta Dilindungi.
          </div>
        </div>
      </div>
    </footer>
  );
}
