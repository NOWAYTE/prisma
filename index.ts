import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //     data : {
  //         name: 'Daniel kamau',
  //         email: "danielkamaunganga3@gmail.com",
  //     },
  //   })
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //create article and associate it with user
  //   const article = await prisma.article.create({
  //     data: {
  //         title: "Daniel's article",
  //         body: "Hello friend Hello friend",
  //         author:  {
  //             connect: {
  //                 id:  1,
  //             }
  //         }
  //     }
  //   })
  //Get all articles

  //   const articles = await prisma.article.findMany();
  //   console.log(articles)

  //update
  //   const user = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "Daniel kamau nganga",
  //     },
  //   });

  //delete a user

  const article = await prisma.article.delete({
    where: {
      id: 1,
    },
  });

  console.log(article)
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
