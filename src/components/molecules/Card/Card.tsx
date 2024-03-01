"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/atoms";
import { useMyContext } from "@/Contexts/MyContext";
import Link from "next/link";

interface CardProps {
  id: string;
  username: string;
  profile: string;
  email: string;
}
const Card: React.FC<CardProps> = ({ username, profile, email, id }) => {
  const { handleDelete, setselectUser, selectUser } = useMyContext();

  console.log(selectUser);

  const cartStyle =
    "w-[300px] h-[370px] bg-white rounded-lg shadow-xl shadow-slate-500 cursor-pointer";
  return (
    <>
      <div
        onClick={() => {
          if (selectUser === id) {
            // unselect
            setselectUser("");
          } else {
            // select
            setselectUser(id);
          }
        }}
        className={
          selectUser === id ? `${cartStyle} bg-blue-300` : `${cartStyle}`
        }
      >
        <div className="w-full h-[50%] rounded-t-md relative">
          <Image
            src={profile}
            alt="User"
            width={120}
            height={100}
            className="w-full h-full object-cover absolute rounded-t-md"
          ></Image>
          <Button
            classname="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400  hover:bg-red-500 right-0 hover:text-white duration-300 ml-[260px] relative"
            onclick={(e) => {
              e.stopPropagation();
              handleDelete(id);
            }}
          >
            {" "}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
        <div className="text-center mt-5">
          <h1 className="text-black text-2xl font-bold">{username}</h1>
          <h3 className="text-gray-500">{email}</h3>
          <Link href={`/${username}`}>
            <Button classname="w-[150px] h-[40px] bg-blue-500 flex items-center justify-center gap-2 ml-[25%] mt-4 rounded-lg text-white">
              Preview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
