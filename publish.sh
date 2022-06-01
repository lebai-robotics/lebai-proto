set -e

# Publish docs
git clone git@github.com:lebai-robotics/proto-doc.git
protoc --doc_out=./proto-doc ./*.proto
cd proto-doc
if [[ `git status --porcelain` ]]; then
  # Changes
  git add .
  git commit -m $(date +%Y%m%d)
  git push
fi
cd ../ # Home

# Publish ts
git clone -b out_ts git@codeup.aliyun.com:lebai/software/lebai-proto.git
pbjs -t json-module -w commonjs -o lebai-proto/lebai.js ./*.proto
pbjs -t static-module ./*.proto | pbts -o lebai-proto/lebai.d.ts -
cd lebai-proto
if [[ `git status --porcelain` ]]; then
  # Changes
  git add .
  git commit -m $(date +%Y%m%d)
  git push
fi
cd .. # Home
