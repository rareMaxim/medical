from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in medical/__init__.py
from medical import __version__ as version

setup(
	name="medical",
	version=version,
	description="Програмне забезпечення для Медикмедиків Мелітополя",
	author="Maxim Sysoev",
	author_email="maks4a@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
