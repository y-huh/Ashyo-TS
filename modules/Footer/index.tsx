import { AppStore, ChatIcon, FacebookIcon, GooglePlay, InstagrammIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from '@/assets/icons'
import { Link } from '@/i18n/navigation'
import { FooterLinks } from '@/types/HeaderType'
import { useTranslations } from 'next-intl'
import React from 'react'

const Footer = () => {
  const t = useTranslations("Footer")
  const data:FooterLinks[] = [
    {
      id: 1,
      icon: <FacebookIcon/>,
      path: "https://www.facebook.com/"
    },
    {
      id: 2,
      icon: <YoutubeIcon/>,
      path: "https://www.youtube.com/"
    },
    {
      id: 3,
      icon: <TelegramIcon/>,
      path: "https://web.telegram.org/"
    },
    {
      id: 4,
      icon: <TwitterIcon/>,
      path: "https://x.com/"
    },    
    {
      id: 5,
      icon: <InstagrammIcon/>,
      path: "https://www.instagram.com/"
    },    
  ]
  return (
    <footer className="containers">
    <div className="md:hidden py-[30px] mt-[30px] flex flex-col">
      <div>
        <h3 className="font-bold text-[18px] leading-[130%] mb-[12px] text-[#000000B2]">{t("apps")}</h3>
        <div className="flex gap-[12px]">
          <Link
            href={"#"}
            className="flex gap-[12px] items-center justify-center w-full h-[60px] bg-[#EBEFF3] rounded-[10px] text-[14px] font-bold"
          >
            <AppStore />
            App Store
          </Link>
          <Link
            href={"#"}
            className="flex gap-[12px] items-center justify-center w-full h-[60px] bg-[#EBEFF3] rounded-[10px] text-[14px] font-bold"
          >
            <GooglePlay />
            Google Play
          </Link>
        </div>
      </div>

      <div className="flex justify-between mt-[30px]">
        <div>
          <h3 className="font-bold text-[18px] leading-[130%] text-[#000000B2]">{t("menu")}</h3>
          <ul className="flex flex-col gap-[12px] mt-[18px]">
            <li className="text-[#000000B2] text-[14px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%]">
              {t("about")}
            </li>
            <li className="text-[#000000B2] text-[14px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%]">
              {t("rules")}
            </li>
            <li className="text-[#000000B2] text-[14px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%]">
              {t("privacy")}
            </li>
            <li className="text-[#000000B2] text-[14px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%]">
              {t("return")}
            </li>
            <li className="text-[#000000B2] text-[14px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%]">
              {t("contactUs")}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-[13px] font-bold text-[18px] leading-[130%] text-[#000000B2]">{t("contact")}</h3>
          <Link className="font-bold text-[20px] leading-[118%]" href={"tel:+998711234567"}>
            +998 (71) 123-45-67
          </Link>

          <div className="mt-[20px] grid grid-cols-3 gap-[10px]">
            {data.map((item: FooterLinks) => (
              <Link
                className="w-[40px] h-[40px] flex items-center justify-center bg-[#EBEFF3] rounded-[7px]"
                key={item.id}
                href={item.path}
              >
                <span>{item.icon && item.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link className="text-[#00000066] text-[12px] mt-[30px]" href={"#"}>
        {t("rights")}
      </Link>
    </div>

    <div className="hidden md:flex py-[50px] mt-[50px] justify-between">
      <div className="">
        <div className="flex flex-col gap-[21px]">
          <h3 className="font-bold text-[20px] leading-[130%] text-[#000000B2]">{t("links")}</h3>
          <div className="flex gap-[10px]">
            {data.map((item: FooterLinks) => (
              <Link
                className="w-[40px] h-[40px] flex items-center justify-center bg-[#EBEFF3] rounded-[7px]"
                key={item.id}
                href={item.path}
              >
                <span>{item.icon && item.icon}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-[40px]">
          <h3 className="font-bold text-[20px] leading-[130%] mb-[12px] text-[#000000B2]">{t("apps")}</h3>
          <div className="flex gap-[12px]">
          <Link
              href={"#"}
              className="flex gap-[12px] items-center justify-center w-[188px] h-[66px] bg-[#EBEFF3] rounded-[10px] text-[16px] font-bold"
            >
              <AppStore />
              AppStore
            </Link>
            <Link
              href={"#"}
              className="flex gap-[12px] items-center justify-center w-[188px] h-[66px] bg-[#EBEFF3] rounded-[10px] text-[16px] font-bold"
            >
              <GooglePlay />
              Google Play
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-[20px] leading-[130%] text-[#000000B2]">{t("menu")}</h3>
        <ul className="flex flex-col w-[206px] gap-[12px] mt-[18px]">
          <li className="text-[#000000B2] text-[16px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%]">
            {t("about")}
          </li>
          <li className="text-[#000000B2] text-[16px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%]">
            {t("rules")}
          </li>
          <li className="text-[#000000B2] text-[16px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%]">
            {t("privacy")}
          </li>
          <li className="text-[#000000B2] text-[16px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%]">
            {t("return")}
          </li>
          <li className="text-[#000000B2] text-[16px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%]">
            {t("contactUs")}
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-[13px] font-bold text-[20px] leading-[130%] text-[#000000B2]">{t("contact")}</h3>
        <Link className="font-bold text-[24px] leading-[118%]" href={"tel:+998711234567"}>
          +998 (71) 123-45-67
        </Link>
        <div>
          <p className="text-[#000000B2] text-[16px] hover:text-[#134E9B] duration-300 cursor-pointer leading-[110%] mt-[32px]">
            {t("questions")}
          </p>
          <form className="relative">
            <input
              className="w-[314px] h-[54px] py-[19px] text-[12px] leading-[130%] pl-[11px] bg-[#EBEFF3] mt-[12px] rounded-[6px] outline-none focus:border-[#134E9B] focus:border-[2px]"
              type="text"
              placeholder={t("placeholder")}
            />
            <span className="absolute top-[28px] right-[12px]">
              <ChatIcon />
            </span>
          </form>
        </div>
      </div>
    </div>

    <Link className="hidden md:block text-[#00000066] text-[12px]" href={"#"}>
      {t("rights")}
    </Link>
  </footer>

)}

export default Footer