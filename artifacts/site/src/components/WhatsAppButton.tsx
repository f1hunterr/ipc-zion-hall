const WHATSAPP_URL =
  "https://wa.me/919986914560?text=" +
  encodeURIComponent("Hi, I'd like to know more about IPC Zion Hall.");

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-30 block w-12 h-12 sm:w-14 sm:h-14 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="relative flex items-center justify-center w-full h-full rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 group-hover:bg-[#1ebe5d] group-hover:scale-105">
        <svg viewBox="0 0 32 32" width="24" height="24" className="sm:w-7 sm:h-7" fill="currentColor" aria-hidden="true">
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.31.646 4.47 1.766 6.31L4 29l7.86-1.73A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-1.96 0-3.79-.55-5.35-1.5l-.383-.23-4.66 1.027 1.02-4.53-.25-.4A9.66 9.66 0 0 1 5.3 15c0-5.9 4.8-10.7 10.704-10.7 5.902 0 10.7 4.8 10.7 10.7 0 5.9-4.798 10.7-10.7 10.7Zm5.86-8.02c-.32-.16-1.89-.93-2.183-1.037-.293-.107-.507-.16-.72.16-.213.32-.827 1.037-1.014 1.25-.187.213-.373.24-.693.08-.32-.16-1.35-.497-2.573-1.586-.95-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.623-.524-.538-.72-.548l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667s1.146 3.093 1.306 3.307c.16.213 2.253 3.44 5.46 4.826.763.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z" />
        </svg>
      </span>
    </a>
  );
}
