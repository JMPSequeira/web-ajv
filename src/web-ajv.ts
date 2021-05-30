import { optionsBuilder } from "./steps/options-builder";
import { resolveSchemas } from "./steps/resolve-schemas";
import { migrateSchemas } from "./steps/migrate-schemas";
import { schemasToValidators } from "./steps/schemas-to-validators";
import { validatorsToStandalone } from "./steps/validators-to-standalones";
import path from "path";
import fse from "fs-extra";

void (async function run() {
    const argv = process.argv.slice(2);

    argv[0] ||= "./web-ajv.config";

    const options = optionsBuilder(...argv);

    const resolved = await resolveSchemas(...options);

    const migrated = await migrateSchemas(...resolved);

    const validators = schemasToValidators(...migrated);

    const standalones = validatorsToStandalone(...validators);

    const basedir = process.cwd();

    standalones.forEach((item) => {
        const outPath = path.join(basedir, item.outFile);
        fse.ensureDirSync(path.dirname(outPath));
        fse.writeFileSync(outPath, item.standalone);
        fse.writeFileSync(outPath.replace(/\.ts$/, ".js"), item.original);
    });
})();
