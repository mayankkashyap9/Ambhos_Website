import React from 'react'
import Styles from './Services.module.css';
import DesignServices from './DesignServices/DesignServices';
function Services() {
    return (
        <div className={Styles.main}>
            <div>
            <a name="services"></a>
            <p className={Styles.para}>OUR SERVICES</p>
            <h1 className={Styles.heading}>Services We Offer</h1>
            </div>

            <div className={Styles.design}>
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
            </div>
        </div>
    )
}

export default Services
