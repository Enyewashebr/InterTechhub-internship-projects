import { useState } from "react";
import "./Footer.css"; // Ensure to add corresponding styles

const Footer = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isDiscoverOpen, setDiscoverOpen] = useState(false);

  return (
    <footer className="footer  sm:w-full">
      <div className="footer-container">
        {/* Desktop View */}
        <div className="footer-bottom sm:hidden">
          <div className="footer-logo">
            <svg
              width="230"
              height="230"
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.98438 46.9883C8.98438 52.496 13.4493 56.9609 18.957 56.9609H48.0664H53.1484C71.9261 56.9609 87.1484 72.1833 87.1484 90.9609V124.973V183.012C87.1484 188.519 91.6133 192.984 97.1211 192.984C102.629 192.984 107.094 188.519 107.094 183.012V115V71.0156C107.094 52.2379 91.8714 37.0156 73.0938 37.0156H58.0391H18.957C13.4493 37.0156 8.98438 41.4805 8.98438 46.9883Z"
                fill="white"
              />
              <path
                d="M122.906 115V183.012C122.906 188.519 127.371 192.984 132.879 192.984C138.387 192.984 142.852 188.519 142.852 183.012V124.973V90.8711C142.852 72.0934 158.074 56.8711 176.852 56.8711H181.934H211.133C216.591 56.8711 221.016 52.4464 221.016 46.9883C221.016 41.4805 216.551 37.0156 211.043 37.0156H171.961H156.906C138.129 37.0156 122.906 52.2379 122.906 71.0156V115Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="footer-icons">
            <i className="icon-instagram">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9999 9.59072C12.453 9.59072 9.59053 12.4532 9.59053 16.0001C9.59053 19.547 12.453 22.4095 15.9999 22.4095C19.5468 22.4095 22.4093 19.547 22.4093 16.0001C22.4093 12.4532 19.5468 9.59072 15.9999 9.59072ZM15.9999 20.1657C13.7062 20.1657 11.8343 18.2938 11.8343 16.0001C11.8343 13.7063 13.7062 11.8345 15.9999 11.8345C18.2937 11.8345 20.1655 13.7063 20.1655 16.0001C20.1655 18.2938 18.2937 20.1657 15.9999 20.1657ZM22.6718 7.83447C21.8437 7.83447 21.1749 8.50322 21.1749 9.33135C21.1749 10.1595 21.8437 10.8282 22.6718 10.8282C23.4999 10.8282 24.1687 10.1626 24.1687 9.33135C24.1689 9.13471 24.1304 8.93995 24.0552 8.75823C23.9801 8.57651 23.8698 8.4114 23.7308 8.27235C23.5917 8.1333 23.4266 8.02305 23.2449 7.94791C23.0632 7.87278 22.8684 7.83423 22.6718 7.83447ZM28.4937 16.0001C28.4937 14.2751 28.5093 12.5657 28.4124 10.8438C28.3155 8.84385 27.8593 7.06885 26.3968 5.60635C24.9312 4.14072 23.1593 3.6876 21.1593 3.59072C19.4343 3.49385 17.7249 3.50947 16.003 3.50947C14.278 3.50947 12.5687 3.49385 10.8468 3.59072C8.84678 3.6876 7.07178 4.14385 5.60928 5.60635C4.14365 7.07197 3.69053 8.84385 3.59365 10.8438C3.49678 12.5688 3.5124 14.2782 3.5124 16.0001C3.5124 17.722 3.49678 19.4345 3.59365 21.1563C3.69053 23.1563 4.14678 24.9313 5.60928 26.3938C7.0749 27.8595 8.84678 28.3126 10.8468 28.4095C12.5718 28.5063 14.2812 28.4907 16.003 28.4907C17.728 28.4907 19.4374 28.5063 21.1593 28.4095C23.1593 28.3126 24.9343 27.8563 26.3968 26.3938C27.8624 24.9282 28.3155 23.1563 28.4124 21.1563C28.5124 19.4345 28.4937 17.7251 28.4937 16.0001ZM25.7437 23.3688C25.5155 23.9376 25.2405 24.3626 24.7999 24.8001C24.3593 25.2407 23.9374 25.5157 23.3687 25.7438C21.7249 26.397 17.8218 26.2501 15.9999 26.2501C14.178 26.2501 10.2718 26.397 8.62803 25.747C8.05928 25.5189 7.63428 25.2438 7.19678 24.8032C6.75615 24.3626 6.48115 23.9407 6.25303 23.372C5.60303 21.7251 5.7499 17.822 5.7499 16.0001C5.7499 14.1782 5.60303 10.272 6.25303 8.62822C6.48115 8.05947 6.75615 7.63447 7.19678 7.19697C7.6374 6.75947 8.05928 6.48135 8.62803 6.25322C10.2718 5.60322 14.178 5.7501 15.9999 5.7501C17.8218 5.7501 21.728 5.60322 23.3718 6.25322C23.9405 6.48135 24.3655 6.75635 24.803 7.19697C25.2437 7.6376 25.5187 8.05947 25.7468 8.62822C26.3968 10.272 26.2499 14.1782 26.2499 16.0001C26.2499 17.822 26.3968 21.7251 25.7437 23.3688Z"
                  fill="white"
                />
              </svg>
            </i>
            <i className="icon-whatsapp">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.67199 24.6587L10.6373 25.2227C12.2652 26.1724 14.1168 26.6708 16.0013 26.6667C18.111 26.6667 20.1733 26.0412 21.9274 24.8691C23.6815 23.697 25.0487 22.0311 25.856 20.082C26.6634 18.133 26.8746 15.9882 26.463 13.9191C26.0515 11.85 25.0356 9.94937 23.5438 8.45761C22.052 6.96585 20.1514 5.94995 18.0823 5.53837C16.0132 5.1268 13.8684 5.33803 11.9194 6.14537C9.97029 6.9527 8.30438 8.31987 7.13231 10.074C5.96025 11.8281 5.33466 13.8904 5.33466 16.0001C5.33076 17.8852 5.82969 19.7373 6.77999 21.3654L7.34266 22.3307L6.47199 25.5321L9.67199 24.6587ZM2.67332 29.3334L4.47599 22.7094C3.28793 20.6733 2.66386 18.3574 2.66799 16.0001C2.66799 8.63608 8.63732 2.66675 16.0013 2.66675C23.3653 2.66675 29.3347 8.63608 29.3347 16.0001C29.3347 23.3641 23.3653 29.3334 16.0013 29.3334C13.645 29.3375 11.3301 28.7139 9.29466 27.5267L2.67332 29.3334ZM11.1893 9.74408C11.3689 9.73164 11.548 9.72986 11.7267 9.73875C11.7987 9.74408 11.8707 9.75119 11.9427 9.76008C12.1547 9.78408 12.388 9.91341 12.4667 10.0921C12.864 10.9943 13.2498 11.901 13.624 12.8121C13.7067 13.0147 13.6573 13.2747 13.5 13.5281C13.42 13.6574 13.2947 13.8387 13.1493 14.0241C12.9987 14.2174 12.6747 14.5721 12.6747 14.5721C12.6747 14.5721 12.5427 14.7294 12.5933 14.9254C12.612 15.0001 12.6733 15.1081 12.7293 15.1987L12.808 15.3254C13.1493 15.8947 13.608 16.4721 14.168 17.0161C14.328 17.1707 14.484 17.3294 14.652 17.4774C15.276 18.0281 15.9827 18.4774 16.7453 18.8107L16.752 18.8134C16.8653 18.8627 16.9227 18.8894 17.088 18.9601C17.1707 18.9947 17.2555 19.0241 17.3427 19.0481C17.3747 19.057 17.4071 19.0619 17.44 19.0627C17.516 19.0656 17.5916 19.0499 17.6602 19.0169C17.7287 18.9839 17.7882 18.9346 17.8333 18.8734C18.7973 17.7054 18.8867 17.6294 18.8933 17.6294V17.6321C18.9603 17.5694 19.0399 17.5218 19.1269 17.4926C19.2139 17.4634 19.3061 17.4532 19.3973 17.4627C19.4791 17.4663 19.5578 17.4841 19.6333 17.5161C20.3413 17.8401 21.5 18.3454 21.5 18.3454L22.276 18.6934C22.4067 18.7561 22.5253 18.9041 22.5293 19.0467C22.5347 19.1361 22.5427 19.2801 22.512 19.5441C22.4693 19.8894 22.3653 20.3041 22.2613 20.5214C22.1892 20.6692 22.0948 20.805 21.9813 20.9241C21.8467 21.0652 21.6994 21.1938 21.5413 21.3081C21.4311 21.3899 21.3755 21.4299 21.3747 21.4281C21.2088 21.5333 21.0385 21.6312 20.864 21.7214C20.5205 21.9034 20.1415 22.008 19.7533 22.0281C19.5067 22.0414 19.26 22.0601 19.012 22.0467C19.0013 22.0467 18.2547 21.9307 18.2547 21.9307C16.359 21.432 14.6059 20.498 13.1347 19.2027C12.8333 18.9374 12.5533 18.6521 12.268 18.3681C11.084 17.1881 10.1867 15.9147 9.64132 14.7121C9.36466 14.1217 9.21477 13.4799 9.20132 12.8281C9.19631 12.0184 9.4614 11.2302 9.95466 10.5881C10.052 10.4627 10.144 10.3321 10.3027 10.1814C10.4707 10.0214 10.5787 9.93608 10.6947 9.87741C10.8494 9.80141 11.0174 9.75613 11.1893 9.74408Z"
                  fill="white"
                />
              </svg>
            </i>
            <i className="icon-x">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4267 27.6907L5.00408 5.29067C4.91225 5.17241 4.85545 5.03076 4.84013 4.88183C4.82482 4.73289 4.85161 4.58265 4.91745 4.44818C4.9833 4.31371 5.08555 4.20042 5.21259 4.12119C5.33963 4.04196 5.48636 3.99997 5.63608 4H8.94275C9.06447 4.00018 9.18456 4.02814 9.29385 4.08174C9.40314 4.13535 9.49875 4.21319 9.57341 4.30933L26.9961 26.7093C27.0879 26.8276 27.1447 26.9692 27.16 27.1182C27.1753 27.2671 27.1485 27.4174 27.0827 27.5518C27.0169 27.6863 26.9146 27.7996 26.7876 27.8788C26.6605 27.958 26.5138 28 26.3641 28H23.0574C22.9357 27.9998 22.8156 27.9719 22.7063 27.9183C22.597 27.8647 22.5014 27.7868 22.4267 27.6907Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M26.6668 4L5.3335 28"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </i>
          </div>
        </div>

        <div className="footer-desktop">
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>News & Blog</li>
              <li>Location</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li>Pricing</li>
              <li>Store</li>
              <li>Features</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Discover</h4>
            <ul>
              <li>Contact Us</li>
              <li>Customers</li>
              <li>Affiliates</li>
            </ul>
          </div>
        </div>

        {/* Mobile View */}
        <div className="mobile-footer w-full gap-5">
          <div className="footer-mobile block justify-between flex-col lg:hidden w-full mb-[20px]">
            <div className="footer-section">
              <div className="droped flex justify-between  m-auto">
                <h4>About</h4>
                <svg
                  onClick={() => setAboutOpen(!isAboutOpen)}
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6.29289 6.29289C6.62623 6.62623 6.79289 6.79289 7 6.79289C7.20711 6.79289 7.37377 6.62623 7.70711 6.29289L13 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {isAboutOpen && (
                <ul className="flex flex-col ">
                  <li className="text-[12px]">About Us</li>
                  <li className="text-[12px]">News & Blog</li>
                  <li className="text-[12px]">Location</li>
                </ul>
              )}
            </div>
            <div className="footer-section">
              <div className="droped flex justify-between">
                <h4>Products</h4>
                <svg
                  onClick={() => setProductsOpen(!isProductsOpen)}
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6.29289 6.29289C6.62623 6.62623 6.79289 6.79289 7 6.79289C7.20711 6.79289 7.37377 6.62623 7.70711 6.29289L13 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {isProductsOpen && (
                <ul>
                  <li>Pricing</li>
                  <li>Store</li>
                  <li>Features</li>
                </ul>
              )}
            </div>
            <div className="footer-section">
              <div className="droped flex justify-between">
                <h4>Discover</h4>
                <svg
                  onClick={() => setDiscoverOpen(!isDiscoverOpen)}
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6.29289 6.29289C6.62623 6.62623 6.79289 6.79289 7 6.79289C7.20711 6.79289 7.37377 6.62623 7.70711 6.29289L13 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {isProductsOpen && (
                <ul>
                  <li>Contact Us</li>
                  <li>Customers</li>
                  <li>Affiliates</li>
                </ul>
              )}
            </div>
          </div>

          <div className="footer-bottom-mobile  lg:hidden  border-white w-full border-t-white border-t-3 mt-[-5px]">
            <div className="footer-logo-mobile flex justify-center mt-[20px]">
              <svg
                width="230"
                height="230"
                viewBox="0 0 230 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.98438 46.9883C8.98438 52.496 13.4493 56.9609 18.957 56.9609H48.0664H53.1484C71.9261 56.9609 87.1484 72.1833 87.1484 90.9609V124.973V183.012C87.1484 188.519 91.6133 192.984 97.1211 192.984C102.629 192.984 107.094 188.519 107.094 183.012V115V71.0156C107.094 52.2379 91.8714 37.0156 73.0938 37.0156H58.0391H18.957C13.4493 37.0156 8.98438 41.4805 8.98438 46.9883Z"
                  fill="white"
                />
                <path
                  d="M122.906 115V183.012C122.906 188.519 127.371 192.984 132.879 192.984C138.387 192.984 142.852 188.519 142.852 183.012V124.973V90.8711C142.852 72.0934 158.074 56.8711 176.852 56.8711H181.934H211.133C216.591 56.8711 221.016 52.4464 221.016 46.9883C221.016 41.4805 216.551 37.0156 211.043 37.0156H171.961H156.906C138.129 37.0156 122.906 52.2379 122.906 71.0156V115Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="footer-icons flex justify-center">
              <i className="icon-instagram">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9999 9.59072C12.453 9.59072 9.59053 12.4532 9.59053 16.0001C9.59053 19.547 12.453 22.4095 15.9999 22.4095C19.5468 22.4095 22.4093 19.547 22.4093 16.0001C22.4093 12.4532 19.5468 9.59072 15.9999 9.59072ZM15.9999 20.1657C13.7062 20.1657 11.8343 18.2938 11.8343 16.0001C11.8343 13.7063 13.7062 11.8345 15.9999 11.8345C18.2937 11.8345 20.1655 13.7063 20.1655 16.0001C20.1655 18.2938 18.2937 20.1657 15.9999 20.1657ZM22.6718 7.83447C21.8437 7.83447 21.1749 8.50322 21.1749 9.33135C21.1749 10.1595 21.8437 10.8282 22.6718 10.8282C23.4999 10.8282 24.1687 10.1626 24.1687 9.33135C24.1689 9.13471 24.1304 8.93995 24.0552 8.75823C23.9801 8.57651 23.8698 8.4114 23.7308 8.27235C23.5917 8.1333 23.4266 8.02305 23.2449 7.94791C23.0632 7.87278 22.8684 7.83423 22.6718 7.83447ZM28.4937 16.0001C28.4937 14.2751 28.5093 12.5657 28.4124 10.8438C28.3155 8.84385 27.8593 7.06885 26.3968 5.60635C24.9312 4.14072 23.1593 3.6876 21.1593 3.59072C19.4343 3.49385 17.7249 3.50947 16.003 3.50947C14.278 3.50947 12.5687 3.49385 10.8468 3.59072C8.84678 3.6876 7.07178 4.14385 5.60928 5.60635C4.14365 7.07197 3.69053 8.84385 3.59365 10.8438C3.49678 12.5688 3.5124 14.2782 3.5124 16.0001C3.5124 17.722 3.49678 19.4345 3.59365 21.1563C3.69053 23.1563 4.14678 24.9313 5.60928 26.3938C7.0749 27.8595 8.84678 28.3126 10.8468 28.4095C12.5718 28.5063 14.2812 28.4907 16.003 28.4907C17.728 28.4907 19.4374 28.5063 21.1593 28.4095C23.1593 28.3126 24.9343 27.8563 26.3968 26.3938C27.8624 24.9282 28.3155 23.1563 28.4124 21.1563C28.5124 19.4345 28.4937 17.7251 28.4937 16.0001ZM25.7437 23.3688C25.5155 23.9376 25.2405 24.3626 24.7999 24.8001C24.3593 25.2407 23.9374 25.5157 23.3687 25.7438C21.7249 26.397 17.8218 26.2501 15.9999 26.2501C14.178 26.2501 10.2718 26.397 8.62803 25.747C8.05928 25.5189 7.63428 25.2438 7.19678 24.8032C6.75615 24.3626 6.48115 23.9407 6.25303 23.372C5.60303 21.7251 5.7499 17.822 5.7499 16.0001C5.7499 14.1782 5.60303 10.272 6.25303 8.62822C6.48115 8.05947 6.75615 7.63447 7.19678 7.19697C7.6374 6.75947 8.05928 6.48135 8.62803 6.25322C10.2718 5.60322 14.178 5.7501 15.9999 5.7501C17.8218 5.7501 21.728 5.60322 23.3718 6.25322C23.9405 6.48135 24.3655 6.75635 24.803 7.19697C25.2437 7.6376 25.5187 8.05947 25.7468 8.62822C26.3968 10.272 26.2499 14.1782 26.2499 16.0001C26.2499 17.822 26.3968 21.7251 25.7437 23.3688Z"
                    fill="white"
                  />
                </svg>
              </i>
              <i className="icon-whatsapp">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.67199 24.6587L10.6373 25.2227C12.2652 26.1724 14.1168 26.6708 16.0013 26.6667C18.111 26.6667 20.1733 26.0412 21.9274 24.8691C23.6815 23.697 25.0487 22.0311 25.856 20.082C26.6634 18.133 26.8746 15.9882 26.463 13.9191C26.0515 11.85 25.0356 9.94937 23.5438 8.45761C22.052 6.96585 20.1514 5.94995 18.0823 5.53837C16.0132 5.1268 13.8684 5.33803 11.9194 6.14537C9.97029 6.9527 8.30438 8.31987 7.13231 10.074C5.96025 11.8281 5.33466 13.8904 5.33466 16.0001C5.33076 17.8852 5.82969 19.7373 6.77999 21.3654L7.34266 22.3307L6.47199 25.5321L9.67199 24.6587ZM2.67332 29.3334L4.47599 22.7094C3.28793 20.6733 2.66386 18.3574 2.66799 16.0001C2.66799 8.63608 8.63732 2.66675 16.0013 2.66675C23.3653 2.66675 29.3347 8.63608 29.3347 16.0001C29.3347 23.3641 23.3653 29.3334 16.0013 29.3334C13.645 29.3375 11.3301 28.7139 9.29466 27.5267L2.67332 29.3334ZM11.1893 9.74408C11.3689 9.73164 11.548 9.72986 11.7267 9.73875C11.7987 9.74408 11.8707 9.75119 11.9427 9.76008C12.1547 9.78408 12.388 9.91341 12.4667 10.0921C12.864 10.9943 13.2498 11.901 13.624 12.8121C13.7067 13.0147 13.6573 13.2747 13.5 13.5281C13.42 13.6574 13.2947 13.8387 13.1493 14.0241C12.9987 14.2174 12.6747 14.5721 12.6747 14.5721C12.6747 14.5721 12.5427 14.7294 12.5933 14.9254C12.612 15.0001 12.6733 15.1081 12.7293 15.1987L12.808 15.3254C13.1493 15.8947 13.608 16.4721 14.168 17.0161C14.328 17.1707 14.484 17.3294 14.652 17.4774C15.276 18.0281 15.9827 18.4774 16.7453 18.8107L16.752 18.8134C16.8653 18.8627 16.9227 18.8894 17.088 18.9601C17.1707 18.9947 17.2555 19.0241 17.3427 19.0481C17.3747 19.057 17.4071 19.0619 17.44 19.0627C17.516 19.0656 17.5916 19.0499 17.6602 19.0169C17.7287 18.9839 17.7882 18.9346 17.8333 18.8734C18.7973 17.7054 18.8867 17.6294 18.8933 17.6294V17.6321C18.9603 17.5694 19.0399 17.5218 19.1269 17.4926C19.2139 17.4634 19.3061 17.4532 19.3973 17.4627C19.4791 17.4663 19.5578 17.4841 19.6333 17.5161C20.3413 17.8401 21.5 18.3454 21.5 18.3454L22.276 18.6934C22.4067 18.7561 22.5253 18.9041 22.5293 19.0467C22.5347 19.1361 22.5427 19.2801 22.512 19.5441C22.4693 19.8894 22.3653 20.3041 22.2613 20.5214C22.1892 20.6692 22.0948 20.805 21.9813 20.9241C21.8467 21.0652 21.6994 21.1938 21.5413 21.3081C21.4311 21.3899 21.3755 21.4299 21.3747 21.4281C21.2088 21.5333 21.0385 21.6312 20.864 21.7214C20.5205 21.9034 20.1415 22.008 19.7533 22.0281C19.5067 22.0414 19.26 22.0601 19.012 22.0467C19.0013 22.0467 18.2547 21.9307 18.2547 21.9307C16.359 21.432 14.6059 20.498 13.1347 19.2027C12.8333 18.9374 12.5533 18.6521 12.268 18.3681C11.084 17.1881 10.1867 15.9147 9.64132 14.7121C9.36466 14.1217 9.21477 13.4799 9.20132 12.8281C9.19631 12.0184 9.4614 11.2302 9.95466 10.5881C10.052 10.4627 10.144 10.3321 10.3027 10.1814C10.4707 10.0214 10.5787 9.93608 10.6947 9.87741C10.8494 9.80141 11.0174 9.75613 11.1893 9.74408Z"
                    fill="white"
                  />
                </svg>
              </i>
              <i className="icon-x">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4267 27.6907L5.00408 5.29067C4.91225 5.17241 4.85545 5.03076 4.84013 4.88183C4.82482 4.73289 4.85161 4.58265 4.91745 4.44818C4.9833 4.31371 5.08555 4.20042 5.21259 4.12119C5.33963 4.04196 5.48636 3.99997 5.63608 4H8.94275C9.06447 4.00018 9.18456 4.02814 9.29385 4.08174C9.40314 4.13535 9.49875 4.21319 9.57341 4.30933L26.9961 26.7093C27.0879 26.8276 27.1447 26.9692 27.16 27.1182C27.1753 27.2671 27.1485 27.4174 27.0827 27.5518C27.0169 27.6863 26.9146 27.7996 26.7876 27.8788C26.6605 27.958 26.5138 28 26.3641 28H23.0574C22.9357 27.9998 22.8156 27.9719 22.7063 27.9183C22.597 27.8647 22.5014 27.7868 22.4267 27.6907Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M26.6668 4L5.3335 28"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </i>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
    </footer>
  );
};

export default Footer;
