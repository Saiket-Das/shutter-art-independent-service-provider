import React from 'react';
import './Blogs.css'


const Blogs = () => {
    return (
        <div>
            <h2 className='text-center'>BLOGS</h2>

            <div >
                <table>
                    <tr>
                        <th>Authentication</th>
                        <th>Contact</th>
                    </tr>

                    <tr>
                        <td>Authentication verifies who the user is.</td>
                        <td>Authorization determines what resources a user can access.</td>
                    </tr>

                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                    </tr>

                </table>
            </div>
        </div>
    );
};

export default Blogs;