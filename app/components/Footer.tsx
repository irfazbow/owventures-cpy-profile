export default function Footer() {
  return (
    <>
      <div className=" bg-white border-t-2 border-orange-400 p-6 mx-auto md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="text-xl font-bold tracking-wide text-gray-900 uppercase">
                Outer Wilds Ventures
              </span>
            </a>
            <div className="text-justify mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-600">
                With so little crew, we can achieve this much. Imagine the
                possibilities when you join us.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Contact us for more information. If need be, come to our museum
                to learn all of the possibilities in the future.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-gray-700 hover:text-orange-600"
              >
                010-9125-0995
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@owventures.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-gray-700 hover:text-orange-600"
              >
                info@owventures.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Office:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                title="Our office's address"
                className="transition-colors duration-300 text-gray-700 hover:text-orange-600"
              >
                120 North Pole, Timber Hearth
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Museum:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                title="Our museum's address"
                className="transition-colors duration-300 text-gray-700 hover:text-orange-600"
              >
                105 North Pole, Timber Hearth
              </a>
            </div>
          </div>

          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Ideas and Thoughts
            </span>

            <p className="mt-4 text-sm text-justify text-gray-600">
              Your wonderful ideas and thoughts can become a fruitful outcome
              when put together. Let&apos;s unravel the mysteries of the cosmos
              together!
              <br />
              Share them with us through mail.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between pt-4 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2024 Outer Wilds Ventures Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
