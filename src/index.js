/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let triangles = 0;
    preferences = preferences.map(function (val) {
        return val - 1;
    });
    for (let i = 0; i < preferences.length - 2; i++) {
        if (preferences[i] !== null) {
            if (preferences[i] === i) {
                preferences[i] = null;
                continue;
            }
            if ((preferences[preferences[preferences[i]]] === i)
            ) {
                preferences[preferences[preferences[i]]] = null;
                preferences[preferences[i]] = null;
                preferences[i] = null;
                triangles++;
                continue;
            }
            preferences[i] = null;
        }
    }

    return triangles;
}
;