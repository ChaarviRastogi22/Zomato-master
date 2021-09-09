FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .


ENV MONGO_URL = mongodb+srv://Chaarvi:ztTiJe7uUjZNSPpY@zomato-master.qevg9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID = 1090071399989-gjnnffapan03b7u72rj7uj8d188buc4f.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET = 3SUVNI5b7UhR2B4yekGhEO4w
ENV AWS_S3_ACCESS_KEY = AKIA3QSXAGDI2U34475Z
ENV AWS_S3_SECRET_KEY = axDebIU1+FKcE/tjAZUN+yQXpv39AetFn55A7B+x7
ENV MAILGUN__DOMAIN = sandbox5e63908437ee4a1699b77d8da618b018.mailgun.org
ENV MAILGUN__API__KEY = 0c682f14c36befd06d6baef01960053c-156db0f1-957d7d4c
ENV RZR_PAY_ID = rzp_test_hCm4UxNQ8PAfkA
ENV RZR_PAY_SECRET = DCSY3qgASQxNO4sS07ZSqwU3
ENV NODE_ENV = production
ENV PORT = 4000

RUN npm run build


CMD ["npm", "run", "start"]