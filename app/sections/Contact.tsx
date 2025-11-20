export default function Contact() {
  return (
    <section
      className='
        p-4 md:p-16
        border border-white/5
        rounded-3xl
        bg-slate-800/25
      '
      id='contact'
    >
      <div className="max-w-md mx-auto w-fit">
        <h2 className="text-left py-8 text-4xl">Get in Touch <span className='inline-block animate-bounce'>📬</span></h2>
        <div className="[&_p]:mb-4 mt-4 text-sm text-slate-300 [&_a]:text-white [&_a]:underline [&_a]:hover:text-sky-300 [&_a]:duration-300 text-shadow-black">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
          </p>
          <p>
            You can contact me via email at <a href="mailto:gdsc0301@gmail.com">gdsc0301@gmail.com</a>.
          </p>
          <p>
            Alternatively, connect with me on LinkedIn: <a href="https://www.linkedin.com/in/guilherme-c/" target="_blank" rel="noopener noreferrer">linkedin.com/in/gdsc0301/</a>.
          </p>
          <p>
            Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  )
}