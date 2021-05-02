import React from 'react';
import facebook from '../../../images/facebook.png';
import twitter from '../../../images/twitter.png'
import instagram from '../../../images/twitter.png' ;

const Social = () => {
    return (
        <div className="bg-dark text-white social">
            <div className="container">
                <h1 className="text-center text-success p-5">My Social Profile</h1>
                <div>
                    <p className="text-center">
                        <a href="//facebook.com/arbanibear.ovi/" target="_blank" ><img style={{ height: '50px', marginRight: '30px'}} src={facebook} alt="" /></a>
                        <a href="//twitter.com/StarOvi1" target="_blank" ><img style={{ height: '50px', marginRight: '30px' }} src={twitter} alt="" /></a>
                        <a href="//instagram.com/ovijitkarmoker/" target="_blank" ><img style={{ height: '50px' }} src={instagram} alt="" /></a>
                    </p>
                </div>
                <h5 className="text-center text-white pt-5">Copyright &copy;{(new Date()).getFullYear()} All Rights Reserved. Designed By Ovijit</h5>
            </div>
        </div>
    );
};

export default Social;