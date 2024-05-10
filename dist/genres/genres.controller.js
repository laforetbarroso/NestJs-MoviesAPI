"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenresController = void 0;
const common_1 = require("@nestjs/common");
const genres_service_1 = require("./genres.service");
const create_genre_dto_1 = require("./dto/create-genre.dto");
const update_genre_dto_1 = require("./dto/update-genre.dto");
let GenresController = class GenresController {
    constructor(genresService) {
        this.genresService = genresService;
    }
    create(createGenreDto) {
        return this.genresService.create(createGenreDto);
    }
    findAll() {
        return this.genresService.findAll();
    }
    findOneById(id) {
        return this.genresService.findOneById(+id);
    }
    findOneByName(name) {
        return this.genresService.findOneByName(name);
    }
    updateById(id, updateGenreDto) {
        return this.genresService.updateById(+id, updateGenreDto);
    }
    updateByName(name, updateGenreDto) {
        return this.genresService.updateByName(name, updateGenreDto);
    }
    removeById(id) {
        return this.genresService.removeById(+id);
    }
    removeByName(name) {
        return this.genresService.removeByName(name);
    }
};
exports.GenresController = GenresController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genre_dto_1.CreateGenreDto]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "findOneByName", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_genre_dto_1.UpdateGenreDto]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "updateById", null);
__decorate([
    (0, common_1.Patch)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_genre_dto_1.UpdateGenreDto]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "updateByName", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "removeById", null);
__decorate([
    (0, common_1.Delete)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "removeByName", null);
exports.GenresController = GenresController = __decorate([
    (0, common_1.Controller)('genres'),
    __metadata("design:paramtypes", [genres_service_1.GenresService])
], GenresController);
//# sourceMappingURL=genres.controller.js.map