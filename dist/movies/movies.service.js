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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movie_entity_1 = require("./entities/movie.entity");
let MoviesService = class MoviesService {
    constructor(moviesRepository) {
        this.moviesRepository = moviesRepository;
    }
    async create(createMovieDto) {
        return await this.moviesRepository.save(createMovieDto);
    }
    async findAll() {
        return await this.moviesRepository.find();
    }
    async findOneById(id) {
        return await this.moviesRepository.findOne({ where: { id } });
    }
    async findOneByTitle(title) {
        return await this.moviesRepository.findOne({ where: { title } });
    }
    async findOneByTitleOrGenre(name) {
        return await this.moviesRepository.find({
            relations: ['genre'],
            where: [{ title: name }, { genres: { name: name } }],
        });
    }
    async updateById(id, updateGenreDto) {
        const toUpdate = await this.moviesRepository.findOne({ where: { id } });
        return await this.update(toUpdate, updateGenreDto);
    }
    async updateByTitle(title, updateGenreDto) {
        const toUpdate = await this.moviesRepository.findOne({ where: { title } });
        return await this.update(toUpdate, updateGenreDto);
    }
    async update(movie, updateGenreDto) {
        const updated = Object.assign(movie, updateGenreDto);
        return await this.moviesRepository.save(updated);
    }
    async removeById(id) {
        return await this.moviesRepository.delete(id);
    }
    async removeByTitle(title) {
        return await this.moviesRepository.delete(title);
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.Movie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MoviesService);
//# sourceMappingURL=movies.service.js.map