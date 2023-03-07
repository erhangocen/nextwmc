'use client';
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function RouterButton(props) {
  return (
    <Link href={props.href}>
      <div className="button">
        <div className="button__flex text-white">
          <span>{props.text}</span>
          <FaArrowRight className="button__icon button--flex"/>
        </div>
      </div>
    </Link>
  );
}
