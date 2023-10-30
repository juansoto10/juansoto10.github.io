'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import logoIcon from '/public/icons/logo.svg'
// import useBodyScrollLock from '@/hooks/useBodyScrollLock'
// import { useState, useEffect, useRef } from 'react'

const navigation = [
  { name: 'About', href: '#about', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  // const [isLocked, toggle] = useBodyScrollLock()

  return (
    <Disclosure as="nav" className="fixed w-full bg-black z-20 transition">
      {({ open }) => (
        <>
          <div className="px-2 md:px-8 lg:px-12">
            <div className="relative flex h-[100px] items-center justify-between">
              {/* Div Mobile menu button*/}
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 border border-black text-bleu hover:border hover:border-bleu focus:outline-none focus:ring-1 focus:ring-inset focus:ring-bleu">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* End Div Mobile menu button*/}
              {/* Div Normal menu and Icon*/}
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      src={logoIcon}
                      alt="Juan Soto Logo"
                      width={50}
                      height={50}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex items-center space-x-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-bleu',
                          'rounded px-1 py-1 hover:text-indigo-200 transition duration-[400ms] text-base font-medium font-sec styled-link'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <span className="bg-indigo-200"></span>
                        {item.name}
                      </a>
                    ))}
                    <a
                      href="./resume/resume_frontend-dev_juan-pablo-soto.pdf"
                      target="_blank"
                      className="styled-button border border-bleu px-5 py-3 font-sec text-base text-bleu rounded leading-[13px] lg:leading-[16px] cursor-pointer transition duration-[400ms] hover:text-white"
                    >
                      <span></span>
                      Resume
                    </a>
                  </div>
                </div>
              </div>
              {/* End Div Normal menu and Icon*/}
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden bg-soft-black">
            <div className="flex flex-col justify-center items-center px-3 py-5">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-bleu hover:text-indigo-200',
                    'block rounded-md px-3 py-2 text-base text-center font-medium w-full mb-5 transition'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              <a
                href="./resume/resume_frontend-dev_juan-pablo-soto.pdf"
                target="_blank"
                className="styled-button border border-bleu px-5 py-3 font-sec text-base text-bleu rounded leading-[13px] lg:leading-[16px] cursor-pointer transition duration-[400ms] hover:text-white mb-4"
              >
                <span></span>
                Resume
              </a>
            </div>
          </Disclosure.Panel>
          {/* End Mobile menu */}
        </>
      )}
    </Disclosure>
  )
}
