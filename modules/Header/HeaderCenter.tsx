"use client"

import { ArrowDownIcon, CompareIcon, SearchIcon, HeartIcon, CartIcon, UserIcon } from "@/assets/icons"
import Button from "@/components/Button"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import Image from "next/image"

const HeaderCenter = () => {
  const t = useTranslations("HeaderCenterContent")

  return (
    <div className="w-full bg-white py-[32px]">
      <div className="containers flex items-center justify-between py-4">
        <Link className="flex items-center gap-[1px]" href="/">
          <Image className="w-[48px] h-[48px]" src="/logo.svg" alt="Logo" width={48} height={48} priority />
          <strong className="text-[36px] font-black text-[#134E9B] leading-[100%]">Ashyo</strong>
        </Link>

        <div className="flex items-center gap-2">
          <Button extraClass="!py-3 !px-6 flex items-center">
            <span>{t("category") || "Kategorya"}</span>
            <ArrowDownIcon />
          </Button>

          <div className="flex items-center">
            <input
              type="text"
              placeholder={t("placeholder")}
              className="h-[48px] w-[400px] px-4 py-2 bg-[#F5F7FA] border-none outline-none rounded-l-[6px]"
            />
            <Button extraClass="!w-[60px] !h-[48px] !p-0 !rounded-l-none">
              <SearchIcon />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button bage={2} extraClass="!w-[48px] !h-[48px] !p-0 !bg-[#EBEFF3]">
            <CompareIcon />
          </Button>

          <Button bage={11} extraClass="!w-[48px] !h-[48px] !p-0 !bg-[#EBEFF3]">
            <HeartIcon />
          </Button>

          <Button bage={7} extraClass="!w-[48px] !h-[48px] !p-0 !bg-[#EBEFF3]">
            <CartIcon />
          </Button>

          <Button extraClass="!w-[48px] !h-[48px] !p-0 !bg-[#EBEFF3]">
            <UserIcon />
          </Button>
        </div>
      </div>

    </div>
  )
}

export default HeaderCenter

