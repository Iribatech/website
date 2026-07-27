import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

const quotes = [
  {
    name: 'Chris Dixon',
    role: 'General Partner, a16z',
    icon: 'bi-globe2',
    accent: '#3b82f6',
    quote: 'Web3 will bring the world from platform economies to protocol economies.',
  },
  {
    name: 'John Johnson',
    role: 'Software Engineer',
    icon: 'bi-code-slash',
    accent: '#10b981',
    quote: 'First, solve the problem. Then, write the code.',
  },
  {
    name: 'Marvin Minsky',
    role: 'AI Pioneer & Cognitive Scientist',
    icon: 'bi-cpu',
    accent: '#8b5cf6',
    quote: 'The question is not whether intelligent machines can have emotions, but whether machines can be intelligent without any emotions.',
  },
  {
    name: 'Andrew Ng',
    role: 'Co-founder, Coursera & DeepLearning.AI',
    icon: 'bi-lightning-charge',
    accent: '#f59e0b',
    quote: 'Artificial intelligence is the new electricity.',
  },
  {
    name: 'Arthur C. Clarke',
    role: 'Science Fiction Author & Futurist',
    icon: 'bi-stars',
    accent: '#06b6d4',
    quote: 'Any sufficiently advanced technology is indistinguishable from magic.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-title text-center" data-reveal>
          <h2>Perspectives</h2>
          <p>Voices shaping the future of technology</p>
        </div>

        <div data-reveal data-reveal-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={false}
            speed={500}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {quotes.map(q => (
              <SwiperSlide key={q.name}>
                <div className="quote-card">
                  <div className="quote-mark">&ldquo;</div>
                  <p className="quote-text">{q.quote}</p>
                  <div className="quote-author">
                    <div
                      className="quote-avatar"
                      style={{ background: `${q.accent}22`, border: `2px solid ${q.accent}55` }}
                    >
                      <i className={`bi ${q.icon}`} style={{ color: q.accent }} />
                    </div>
                    <div>
                      <div className="quote-name">{q.name}</div>
                      <div className="quote-role">{q.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
