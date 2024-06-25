import React from 'react';
import './style.scss';
import Layout from '../../Components/Layout';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Watches = () => {
    return (
        <Layout>
            <div className='watches'>
                <div className='slider'>
                    <div className='container' style={{ display: 'flex' }}>
                    </div>
                </div>
            </div>
            <div className='watch-shop'>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches1.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000DN-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches2.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B300CXD-9A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches3.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches4.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000D-1A9</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches5.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000PRB-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches6.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000CX-9A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches7.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000FR-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches8.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000D-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches9.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000B-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches10.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000DB-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches11.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000DB-1A2</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className='promotion-video'>
                <div className='vid-title'>
                    <h2>TANITIM VİDEOSU</h2>
                </div>
                <iframe width="100%" height="700" src="https://www.youtube.com/embed/jJ8XlgSJh2c?si=p6EChPKHAjnNLH5z"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                     encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
            </div>
            <div className='feature'>
                <div className='title-1'>
                    <h3>XÜSUSİYYƏTLƏR</h3>
                </div>
                <div className='box'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src="./img/watches12.avif" alt="" />
                        </div>
                        <div className='col-6'>
                            <h4>Xüsusi texnika ilə yaradılan unikal dizayn: İki rəngli gümüş və qara rəng</h4>
                            <p>Yalnız MT-G-nin əldə edə biləcəyi mürəkkəb formalı metal korpus, “işıq və kölgə”
                                konsepsiyası ilə hazırlanmışdır. Çərçivə və ön vintlər qara IP ilə işləndikdən sonra,
                                altındakı paslanmayan poladı üzə çıxarmaq üçün yerlərdə cilalama və kəsmə prosesləri
                                tətbiq olunur. Saat və dəqiqə əqrəbləri üçün gümüş alumit müalicəsi tətbiq olunur,
                                ardınca onların mərkəzləri lazerlə oyma və nəhayət qara alumit müalicəsi tətbiq olunur.</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src="./img/watches13.avif" alt="" />
                        </div>
                        <div className='col-6'>
                            <h4>Dual Core Guard strukturu: Sərtlik, yığcam forma və yüngüllük təmin edir</h4>
                            <p>Dual Core Guard strukturu modulu karbon lifi ilə gücləndirilmiş qatran korpusu ilə
                                qoruyur və korpusu metal komponentlərlə əhatə edir. Korpusun arxa tərəfi lentləri
                                korpusa birləşdirən qapaqlar və tac və düymələr üçün qoruyucu kimi xidmət etmək
                                üçün qaldırılır. İnteqrasiya edilmiş qəlibləmə gücləndirilmiş sərtlik təmin etməklə
                                yanaşı, həm də saatı belə yığcam və yüngül etməyə kömək edir.</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src="./img/watches14.avif" alt="" />
                        </div>
                        <div className='col-6'>
                            <h4>Mürəkkəb formalı korpus arxası: Formanın tamamilə orijinal gözəlliyini yaradır</h4>
                            <p>Biləkdə hamar olan, lakin mürəkkəb, 3D formada yuxarıya doğru çıxan paslanmayan polad
                                korpusu hazırlamaq üçün təkrar basma, kəsmə və cilalama proseslərini tətbiq edirik.
                                Onun konfiqurasiyası üst çərçivə ilə birləşir və hər ikisini birləşdirən unikal
                                formalı vintlər var. Heyrətamiz korpus dizaynı metal materialın özünün dərin
                                görünüşünü və onun mürəkkəb formasının gözəlliyini nümayiş etdirir, eyni zamanda
                                incə profili təmin edir.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='row flex-wrap justify-content-center'>
                    <div className='col-4'>
                        <div className='box'>
                            <div className='img-area'>
                                <img src="./img/watches15.avif" alt="" />
                            </div>
                            <div className='text'>
                                <p>Dual Core Guard strukturu karbon və metalı birləşdirir</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='box'>
                            <div className='img-area'>
                                <img src="./img/watches16.avif" alt="" />
                            </div>
                            <div className='text'>
                                <p>Qaranlıqda saatın oxunmasını qorumaq üçün Super İşıqlandırıcı
                                    (yüksək parlaqlıqlı LED işıq).</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='box'>
                            <div className='img-area'>
                                <img src="./img/watches17.avif" alt="" />
                            </div>
                            <div className='text'>
                                <p>Cızıqlara davamlı, əks etdirməyən örtüklü yüksək şəffaf sapfir kristal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Watches