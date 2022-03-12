import React from "react";
import { useParams } from "react-router-dom";
import VendorQRCode from "react-qr-code";
import { Heading } from "@chakra-ui/react";

import { qrCodes } from '../data/data'

const ErrorMessage = () => <div>chinga tu pito pendeja!</div>

export function QRCode() {
  const params = useParams()
  const codeId = parseInt(params.codeId, 10)

  if (Number.isNaN(codeId)) return <ErrorMessage />

  const code = qrCodes.find((code) => code.id === codeId )
  if (!code) return <ErrorMessage />

  return (
    <div style={{ gap: '5em', display: "flex", marginTop: 20 }}>
      <Heading>{code.codeValue}</Heading>
      <VendorQRCode value={code.codeValue} size={256} bgColor="#282c34" fgColor="#fff" level="H"  />
    </div>
  );
}