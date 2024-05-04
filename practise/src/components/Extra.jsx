import React from "react";

const Extra = () => {
  return (
    <>
      <div className="flex flex-col w-full h-[2400px] md:h-[1400px] lg:h-[1800px] pt-8  ">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl  md:text-4xl lg:text-4xl font-semibold ">
            How the app works
          </h1>
        </div>
        <div className=" flex flex-col md:flex-row lg:flex-row w-full h-full md:h-[500px] lg:h-full ">
          <div className="flex-1 flex  justify-center items-center ">
            <img
              src="https://s3-alpha-sig.figma.com/img/4090/93ea/e174a423b04a9efcc4191e8d7ff471ac?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fRwlyDMpcbINi9ZcwkUHS~CQEDuY08rHzb5XZ343QlVQxqEtpwUGPkQIKWpEhqQNInmmZVU0aD8KmX6N0R56HwHoCBSff4QNzbMoUo~Ax~9OCK8FS4PvPCzkHGQCWixsFZHDgB6mP9HDnGoc1ratghq~LpuhkJLi1gf0xWq1TNuCnwAb0qNgLz-x7GOa0PJSqZutERJsS-Q2QmP6FAwfOudgSfkWE1Gq2gzoFEwwFqTDhuJQKwv9HGgnlNkYJcdx0kJn4Tt8U9QBo7r3Hlqv6FkJrgTHzTYvfR-NIeD-PZl0rRaYXGxEsKHBdwk9qQuOCeooDGz5K4VNc6y~k6O9vw__"
              alt="mobile"
            />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col gap-4 w-2/3 ">
              <p className="text-red-500  font-semibold">Create and account</p>
              <h1 className="text-3xl font-semibold">
                Create/login to an existing account to get started
              </h1>
              <p className="text-lg  text-gray-500">
                An accountis created with your email and a desired password.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row lg:flex-row w-full h-full md:h-[500px] lg:h-full ">
          
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col gap-4 w-2/3 ">
            <p className="text-red-500  font-semibold">Explore varities</p>
              <h1 className="text-3xl font-semibold">
                Shop for your favirotes meal as dey hot.{" "}
              </h1>
              <p className="text-lg  text-gray-500">
                {" "}
                Shop for your favirotes meals or drinks and enjoy while doing
                it.
              </p>
            </div>
          </div>
          <div className="flex-1  flex  justify-center items-center ">
          <img
              src="https://s3-alpha-sig.figma.com/img/9a1f/6ec2/9deab65a0825abc73cb16299b4d86970?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKCXrFOYCem-AFTcEHFoDLRsbJDkiTWkuUIeTAC6qNuQV0kW~j~WCDIiEAJm9j3cmoXIpwWVjYifSHRPutofkfxkTJYjkPaDKvUKssGehnTtH0Zy6bIGCMZI-wKO7xe-arhH3FabJ6UJ2jVlBC8Cb0nDaoYe-fs5OIMSYyaSCXYcY0jN0TQQXvinZQbYqqGsYGQCIJ9EvFgxxwkJ09tXJJb0-BEdMV9zFi6U~P0B00bbygbHj1hifX0Pj37fyFcvRJ8BK7FDT-dHMqFvwQdL1ctz5laCZA6dBCTUpEkiy~IWKf7LJKna0RzlHULB93MdXKOQRd6gxLds-CFLa7HXWg__"
              alt="mobile"
            />
          </div>
        </div>
        <div className=" flex flex-col md:flex-row lg:flex-row w-full h-full md:h-[500px] lg:h-full">
          <div className="flex-1  flex  justify-center items-center ">
          <img
              src="https://s3-alpha-sig.figma.com/img/9727/0cb2/897e2e23f0fcbe24ad9aa1958337eedb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q20GIihmr7pQR35cwtOcHBrpwFO86fkPhLgPjGSm~LhYO2Bemmm5jBW2IiU3cTiaaM6a-drtDMaWahAsDmn0tKlGjy3LYaeNM5ScxHnTFBXyhD0TqwoOriiwDJ07tMJL7zGihLJGzsV83cfagLNqBm236xd3zH4q9WFur7GF6l4h~usSYRJoLFDbpj5QMUBiDgGFvmtMWLlFNbak~FU1ysznyiq0tO0zR-l-VBeEowzu42XxALqrxV~M6Gi37haUNgLrQf8cUfL-x7Uoap5EW-verbCfXm6DH9KQXMdJiFs8HKbgZyU1J~bdJPPpk0DbbYlC33QUIGx~08evWCgpUw__"
              alt="mobile"
            />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col gap-4 w-2/3 ">
              <p className="text-red-500  font-semibold">Checkout</p>
              <h1 className="text-3xl font-semibold">
              When you done check out and get it delivered.{" "}
              </h1>
              <p className="text-lg  text-gray-500">
                {" "}
                When you done check out and get it delivered with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Extra;
