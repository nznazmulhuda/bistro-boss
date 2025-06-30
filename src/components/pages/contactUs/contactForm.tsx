export default function ContactForm() {
  return (
    <main className="bg-[#F3F3F3] p-22 mb-22">
      <form className="grid grid-cols-2 gap-6">
        {/* name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="font-inter text-xl font-semibold text-[#444]"
          >
            Name*
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="mt-4 rounded-lg border border-[#E8E8E8] bg-white px-9 py-7 text-[#A1A1A1] outline-none focus-within:outline-none"
          />
        </div>

        {/* email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="font-inter text-xl font-semibold text-[#444]"
          >
            Email*
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="mt-4 rounded-lg border border-[#E8E8E8] bg-white px-9 py-7 text-[#A1A1A1] outline-none focus-within:outline-none"
          />
        </div>

        {/* phone */}
        <div className="col-span-2 flex flex-col">
          <label
            htmlFor="phone"
            className="font-inter text-xl font-semibold text-[#444]"
          >
            Phone*
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="mt-4 rounded-lg border border-[#E8E8E8] bg-white px-9 py-7 text-[#A1A1A1] outline-none focus-within:outline-none"
          />
        </div>

        {/* message */}
        <div className="col-span-2 flex flex-col">
          <label
            htmlFor="message"
            className="font-inter text-xl font-semibold text-[#444]"
          >
            Message*
          </label>

          <textarea
            name="message"
            placeholder="Write your message here"
            className="mt-4 h-[300px] resize-none rounded-lg border border-[#E8E8E8] bg-white px-9 py-7 text-[#A1A1A1] outline-none focus-within:outline-none"
          />
        </div>

        {/* submit button */}
        <div className="col-span-2 mt-11 flex items-center justify-center">
          <button
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
            type="submit"
            className="font-inter flex cursor-pointer items-center gap-2 px-[22px] py-4 text-xl font-bold text-white"
          >
            Send Message{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.7358 3.29705C22.8078 2.82305 22.6058 2.34805 22.2148 2.06905C21.8238 1.79105 21.3088 1.75605 20.8838 1.97905C17.4828 3.76505 5.58577 10.011 1.93177 11.929C1.48077 12.165 1.21477 12.647 1.25377 13.154C1.29277 13.661 1.62877 14.097 2.11077 14.262C3.53377 14.749 5.27277 15.346 7.99977 16.281L18.9998 6.00005L10.0978 17C13.0058 17.997 17.5528 19.556 18.6938 19.9471C19.0508 20.0701 19.4448 20.0271 19.7678 19.8321C20.0908 19.6361 20.3098 19.3071 20.3668 18.9331L22.7358 3.29705Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.83154 17.623V20.893C8.83154 21.395 9.12654 21.85 9.58354 22.055C10.0415 22.261 10.5765 22.179 10.9515 21.845L13.7895 19.323L8.83154 17.623Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </form>
    </main>
  );
}
