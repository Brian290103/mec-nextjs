import About from '@/components/About';
import Courses from '@/components/Courses';
import Founders from '@/components/Founders';
import HomeCarousel from '@/components/HomeCarousel';
import LatestNews from '@/components/LatestNews';
import Lodge from '@/components/Lodge';
import NewsletterBanner from '@/components/NewsletterBanner';
import Staff from '@/components/Staff';
import Testimonials from '@/components/Testimonials';
import Wrapper from '@/components/Wrapper';

export default function Home({
  error,
  newsData,
  courseData,
  staffData,
  parentsTestimony,
  alumniTestimony,
}) {
  if (error) {
    console.error(error);
    return;
  }
  return (
    <main className="">
      <HomeCarousel />
      <Wrapper className="mt-10">
        <LatestNews newsData={newsData} />
        <About />
        <Courses courseData={courseData} />
        <Lodge />
        <Founders />
        <Staff staffData={staffData} />
        <Testimonials
          parentsTestimony={parentsTestimony}
          alumniTestimony={alumniTestimony}
        />
        <NewsletterBanner />
      </Wrapper>
    </main>
  );
}

// min-h-[calc(100vh-200px)]

export async function getServerSideProps() {
  // newsData;
  try {
    const resNews = await fetch('http://localhost:3000/api/news');
    const resCourses = await fetch('http://localhost:3000/api/course');
    const resStaffs = await fetch('http://localhost:3000/api/staff');
    const resTestimonials = await fetch(
      'http://localhost:3000/api/testimonials'
    );

    if (!resNews.ok && !resCourses.ok && !resStaffs.ok && !resTestimonials.ok) {
      throw new Error('Server Error');
    }
    // console.log(resTestimonials);
    const newsData = await resNews.json();
    const courseData = await resCourses.json();
    const staffData = await resStaffs.json();
    const testimonialData = await resTestimonials.json();
    // console.log(testimonialData);

    const parentsTestimony = testimonialData.filter(
      (td) => td.role === 'parent'
    );
    const alumniTestimony = testimonialData.filter(
      (td) => td.role === 'alumni'
    );
    // console.log(parentsTestimony);

    return {
      props: {
        newsData,
        courseData,
        staffData,
        parentsTestimony,
        alumniTestimony,
      },
    };
  } catch (error) {
    console.error('Error: ', error);

    return {
      props: {
        newsData: [],
        courseData: [],
        staffData: [],
        parentsTestimony: [],
        alumniTestimony: [],
        error: 'Failed to fetch data',
      },
    };
  }
}
