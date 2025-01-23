FROM node:latest

ADD https://api.github.com/repos/yanagiragi/Pixiv-Downloader/git/refs/heads/v3 version.json
RUN git clone https://github.com/yanagiragi/Pixiv-Downloader.git

WORKDIR /Pixiv-Downloader
RUN npm install

RUN cp ./docker/entrypoint.sh /bin/fetchPixiv
RUN chmod u+x /bin/fetchPixiv

CMD [ "/bin/fetchPixiv" ]