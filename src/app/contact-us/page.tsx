import ContactBanner from "@/assets/contact/banner.jpg";
import ContactForm from "@/components/pages/contactUs/contactForm";
import LocationCard, {
  LocationCardProps,
} from "@/components/shared/card/locationCard";
import PageBanner from "@/components/shared/pageBanner/pageBanner";
import SectionTitle from "@/components/shared/sectionTitle/sectionTitle";

const locationData: LocationCardProps[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_22_196)">
          <path
            d="M24.3287 21.1686C23.2832 20.1365 21.9781 20.1365 20.9393 21.1686C20.1469 21.9544 19.3545 22.7401 18.5754 23.5392C18.3623 23.759 18.1825 23.8056 17.9228 23.6591C17.4101 23.3794 16.864 23.153 16.3713 22.8467C14.074 21.4017 12.1495 19.5439 10.4449 17.453C9.59917 16.4142 8.84672 15.3022 8.32067 14.0503C8.21412 13.7972 8.2341 13.6308 8.44053 13.4243C9.23293 12.6586 10.0054 11.8728 10.7845 11.0871C11.8699 9.99501 11.8699 8.7165 10.7778 7.61778C10.1585 6.99185 9.53924 6.37923 8.91997 5.75329C8.28071 5.11404 7.64812 4.46812 7.0022 3.83553C5.95676 2.81672 4.65161 2.81672 3.61282 3.84219C2.81376 4.62794 2.04798 5.43366 1.2356 6.2061C0.483143 6.9186 0.103585 7.79091 0.0236787 8.80973C-0.10284 10.4678 0.303352 12.0326 0.876018 13.5575C2.04798 16.7138 3.83257 19.5172 5.99671 22.0876C8.91997 25.5635 12.4092 28.3136 16.4911 30.298C18.329 31.1903 20.2334 31.8761 22.3043 31.9893C23.7294 32.0693 24.9679 31.7097 25.9601 30.5976C26.6393 29.8385 27.4051 29.146 28.1242 28.4202C29.1896 27.3414 29.1963 26.0363 28.1375 24.9709C26.8724 23.699 25.6005 22.4338 24.3287 21.1686Z"
            fill="white"
          />
          <path
            d="M23.0571 15.8615L25.5142 15.442C25.128 13.1846 24.0626 11.1403 22.4445 9.51557C20.7332 7.80423 18.569 6.72549 16.1851 6.39255L15.8389 8.863C17.6834 9.1227 19.3614 9.95506 20.6865 11.2802C21.9384 12.5321 22.7575 14.1169 23.0571 15.8615Z"
            fill="white"
          />
          <path
            d="M26.8992 5.18062C24.0625 2.34393 20.4733 0.552689 16.5113 0L16.165 2.47045C19.5877 2.94989 22.6908 4.50142 25.1412 6.94523C27.4652 9.26919 28.9901 12.2058 29.5428 15.4353L31.9999 15.0158C31.354 11.2735 29.5894 7.87748 26.8992 5.18062Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_196">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "PHONE",
    lists: ["+38 (012) 34 56 789"],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.3867 29.8013L15.48 29.8547L15.5173 29.876C15.6654 29.9561 15.831 29.998 15.9993 29.998C16.1676 29.998 16.3333 29.9561 16.4813 29.876L16.5187 29.856L16.6133 29.8013C17.1348 29.4921 17.6437 29.1621 18.1387 28.812C19.4201 27.9073 20.6174 26.889 21.716 25.7693C24.308 23.116 27 19.1293 27 14C27 11.0826 25.8411 8.28473 23.7782 6.22183C21.7153 4.15893 18.9174 3 16 3C13.0826 3 10.2847 4.15893 8.22183 6.22183C6.15893 8.28473 5 11.0826 5 14C5 19.128 7.69333 23.116 10.284 25.7693C11.3822 26.8889 12.579 27.9072 13.86 28.812C14.3554 29.1621 14.8647 29.4921 15.3867 29.8013ZM16 18C17.0609 18 18.0783 17.5786 18.8284 16.8284C19.5786 16.0783 20 15.0609 20 14C20 12.9391 19.5786 11.9217 18.8284 11.1716C18.0783 10.4214 17.0609 10 16 10C14.9391 10 13.9217 10.4214 13.1716 11.1716C12.4214 11.9217 12 12.9391 12 14C12 15.0609 12.4214 16.0783 13.1716 16.8284C13.9217 17.5786 14.9391 18 16 18Z"
          fill="white"
        />
      </svg>
    ),
    title: "ADDRESS",
    lists: ["+38 (012) 34 56 789"],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3C8.82 3 3 8.82 3 16C3 23.18 8.82 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3ZM17 8C17 7.73478 16.8946 7.48043 16.7071 7.29289C16.5196 7.10536 16.2652 7 16 7C15.7348 7 15.4804 7.10536 15.2929 7.29289C15.1054 7.48043 15 7.73478 15 8V16C15 16.552 15.448 17 16 17H22C22.2652 17 22.5196 16.8946 22.7071 16.7071C22.8946 16.5196 23 16.2652 23 16C23 15.7348 22.8946 15.4804 22.7071 15.2929C22.5196 15.1054 22.2652 15 22 15H17V8Z"
          fill="white"
        />
      </svg>
    ),
    title: "WORKING HOURS",
    lists: ["Mon - Fri: 08:00 - 22:00", "Sat - Sun: 10:00 - 23:00"],
  },
];

export default function ContactUsPage () {
  return (
    <section>
      {/* section banner */}
      <PageBanner
        bannerImage={ContactBanner.src}
        semiTitle="Would you like to try a dish?"
        title="CONTACT US"
      />

      <main className="container mx-auto">
        {/* section title */}
        <SectionTitle semiTitle="---Visit Us---" title="OUR LOCATION" />

        {/* cards */}
        <section className="mb-[50px] grid grid-cols-3 gap-6">
          {locationData.map((item) => (
            <LocationCard key={item.title} {...item} />
          ))}
        </section>

        {/* section title */}
        <SectionTitle
          semiTitle="---Send Us a Message---"
          title="CONTACT FORM"
        />

        {/* contact form */}
        <ContactForm />
      </main>
    </section>
  );
}
