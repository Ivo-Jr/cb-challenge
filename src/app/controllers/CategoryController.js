import Course from '../models/Course';
import File from '../models/File';

class CategoryController {
  async index(request, response) {
    const { page = 1 } = request.query;

    const nameCourse = await Course.findAll({
      where: { category: 'Cálculos' },
      attributes: ['id', 'name', 'category', 'url', 'avatar_id'],
      limit: 3,
      offset: (page - 1) * 3,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path'],
        },
      ],
    });

    return response.json(nameCourse);
  }
}

export default new CategoryController();
