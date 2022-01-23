import React from 'react';
import './ProductSlider.css'
import Slider from "react-slick";
const ProductSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='product-slider'>
            <Slider  {...settings}>
                <div>
                    <img style={{ marginTop: 100 }} height='400' src="https://www.aesop.com/u1nb1km7t5q7/3f2oytDw9wmcetShJHqGaw/14356c3ae0f314ca8dd896fb67776f6e/Aesop_Body_Rejuvenate_Intensive_Body_Balm_120mL_large.png" alt="" />
                    <p>Rejuvenate Intensive Body Balm</p>
                    <p >A sumptous moisturing balm</p>

                </div>
                <div>
                    <img style={{ marginTop: 100 }} height='400' src="https://www.aesop.com/u1nb1km7t5q7/1Bvr76NWKg0CgUR2bAYwtf/0123f846ce85d98c71ffa70a60946a47/Aesop_Resurrection_Portable_Hand_Care_Hybris_Large_1584x962px__1_.png" alt="" />
                    <p>Rejuvenate Intensive Body Balm</p>
                    <p >A sumptous moisturing balm</p>
                </div>
                <div>
                    <img style={{ marginTop: 100 }} height='400' src="https://www.aesop.com/u1nb1km7t5q7/5tohXrYPG52gI48cP9TbJR/c8fd45a7665745c81dffaf5c6b5895b2/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-large.png" alt="" />
                    <p>Rejuvenate Intensive Body Balm</p>
                    <p>A sumptous moisturing balm</p>
                </div>
                <div>
                    <img style={{ marginTop: 100 }} height='400' src="https://www.aesop.com/u1nb1km7t5q7/1D8SZ3pwiWAd4iHgyaLwUK/58cab4eb3026ea8c0a48760a52830b85/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Large-835x962px.png" alt="" />
                    <p>Rejuvenate Intensive Body Balm</p>
                    <p>A sumptous moisturing balm</p>
                </div>
                <div>
                    <img style={{ marginTop: 100 }} height='400' src="https://www.aesop.com/u1nb1km7t5q7/4uMx0pAo5uZhfxP4V5nAzV/5e3e3fbd5877a92ee1b5b2e9105e9912/Aesop-Skin-Damascan-Rose-Facial-Treatment-25mL-Large-684x668px.png" alt="" />
                    <p>Rejuvenate Intensive Body Balm</p>
                    <p>A sumptous moisturing balm</p>
                </div>
                <div>
                    <img style={{ marginTop: 100 }} height='400' src="https://www.aesop.com/u1nb1km7t5q7/2RdKQmpPtqVC2lVLtCeott/3841f8985a8decb737794e843b3239d3/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png" alt="" />
                    <p>Rejuvenate Intensive Body Balm</p>
                    <p>A sumptous moisturing balm</p>
                </div>

            </Slider>
        </div>
    );
};

export default ProductSlider;