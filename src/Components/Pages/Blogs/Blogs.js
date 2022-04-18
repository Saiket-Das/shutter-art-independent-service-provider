import React from 'react';
import './Blogs.css'


const Blogs = () => {
    return (
        <div>

            {/* QUESTION - 1 */}
            <h4 className='mt-5 text-center'>Question 1 - Difference between Authentication and Authorization</h4>
            <div className='table-container mt-3'>
                <table>
                    <tr>
                        <th>Authentication</th>
                        <th>Authorization</th>
                    </tr>

                    <tr>
                        <td>Authentication verifies who the user is.</td>
                        <td>Authorization determines what resources a user can access.</td>
                    </tr>

                    <tr>
                        <td>Authentication is the first step of a good identity and access management process.</td>
                        <td>Authorization always takes place after authentication.
                        </td>
                    </tr>

                    <tr>
                        <td>Authentication is visible to and partially changeable by the user.	</td>
                        <td>Authorization is not visible to or changeable by the user.

                        </td>
                    </tr>

                </table>
            </div>



            {/* QUESTION - 2 */}
            <h4 className='mt-5 text-center ques-2'>Question 2 - Other services that Firebase provide.</h4>
            <div>
                <ul className='d-flex justify-content-center'>
                    <div>
                        <li>Cloud Functions</li>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Cloud Messaging</li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;