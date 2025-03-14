from pathlib import Path

from setuptools import find_packages, setup

this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()

setup(
    name="chameleon",
    long_description=long_description,
    long_description_content_type="text/markdown",
    version="0.0.1",
    description="Girder plugin adding Chameleon conversion capabilities to Girder.",
    packages=find_packages(),
    include_package_data=True,
    license="BSD",
    classifiers=[
        "Development Status :: 4 - Beta",
        "Environment :: Web Environment",
        "License :: OSI Approved :: BSD License",
        "Operating System :: POSIX :: Linux",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
    ],
    python_requires=">=3.10",
    setup_requires=["setuptools-git"],
    install_requires=["girder>=5.0.0a5.dev0", "qrcode[pil]", "cairosvg"],
    entry_points={"girder.plugin": ["chameleon = girder_chameleon:ChameleonPlugin"]},
    zip_safe=False,
)
