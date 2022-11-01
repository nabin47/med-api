import React from "react"

import { FacebookFilled, TwitterSquareFilled  } from "@ant-design/icons"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left footer">
        <footer>
            <div className="row">
                <span>
                    <FacebookFilled className="footer-icons"/>
                    <TwitterSquareFilled className="footer-icons"/>
                </span>
            </div>
            <div class="container-fluid bg-copyright">
                <div class="container">
                    <p class="copyright" style={{color: "#ffffff ! important"}}>
                        &copy; <a href="https://www.vivasoftltd.com/">Vivasoft</a> 2022 • All rights reserved.
                    </p>
                </div>
            </div>


        </footer>
    </div>


</footer>

export default Footer