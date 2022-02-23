import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black">
            <hr />
            <div className="bg-gray-100 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                    <span>Made with ❤ by Sahil Bhadu.</span>
                </div>
                <div className="footer">
                    <a href='https://twitter.com/SahilBhadu15'>
                        <img src='./assets/logo-twitter.svg' alt='img' width="30" height="30" />
                    </a>
                    <a href='https://github.com/sbhadu'>
                        <img src='./assets/logo-github.svg' alt='img' width="30" height="30" />
                    </a>
                    <a href='https://www.instagram.com/sbhadu__/'>
                        <img src='./assets/logo-instagram.svg' alt='img' width="30" height="30" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
