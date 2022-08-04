import { servicesData } from '../../components/home/servicesData';
import styles from '../../components/home/services.module.scss';
import Layout from '../../components/Layout';
import Image from 'next/image';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Services = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Layout title={'Next Level Partners Login Page'}>
      <section className={styles.section}>
        <h2 className={styles.title}> What we can do for you</h2>
        <p className={styles.subtitle}>
          We work with you to develop a strategic roadmap toward your goals and
          objectives
        </p>

        {/* Aqui va el carousel con swiper begin */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            0: {
              spaceBetween: 20,
              slidesPerView: 1,
            },
            640: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 40,
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          <article className={styles.servicesCards}>
            {servicesData.map((service) => {
              return (
                <SwiperSlide key={service.id}>
                  <div className={styles.cardBox}>
                    <div className={styles.front}>
                      <Image
                        alt={service.title}
                        height="100px"
                        width="100px"
                        className="rounded-full align-middle"
                        src={service.img}
                      />
                      <h2 className={styles.subtitle}>{service.title}</h2>
                    </div>
                    <div className={styles.back}>
                      <h2 className={styles.subtitle}>{service.title}</h2>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </article>
        </Swiper>
        {/* Aqui va el carousel con swiper end */}
      </section>
    </Layout>
  );
};

export default Services;
