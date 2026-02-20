const { Jimp } = require("jimp");

async function removeWhite() {
    try {
        const image = await Jimp.read("public/logo.png");

        // Iterate over every pixel
        image.scan(0, 0, image.width, image.height, function (x, y, idx) {
            // The colors are a little off-white sometimes, so use a threshold
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            const a = this.bitmap.data[idx + 3];

            // If it's very close to white, make it transparent
            if (r > 240 && g > 240 && b > 240) {
                this.bitmap.data[idx + 3] = 0; // Set alpha to 0
            }
        });

        await image.write("public/logo-transparent.png");
        console.log("Successfully created transparent logo");
    } catch (err) {
        console.error("Error processing image:", err);
    }
}

removeWhite();
