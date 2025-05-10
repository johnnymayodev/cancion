echo -e "\033[0;33mRunning Development Environment...\033[0m"

# check if docker is running
if ! docker info > /dev/null 2>&1; then
  echo -e "\033[0;31mDocker is not running\033[0m"
  exit 1
fi

docker compose down

if [[ "$*" == *"--build"* ]] || [[ "$*" == *"-b"* ]]; then
  docker compose up --detach --build
else
  docker compose up --detach
fi

echo -e "\033[0;32mDevelopment Environment Started\033[0m"
