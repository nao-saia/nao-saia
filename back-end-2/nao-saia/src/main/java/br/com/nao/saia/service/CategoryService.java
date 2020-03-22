package br.com.nao.saia.service;

import br.com.nao.saia.converter.CategoryConverter;
import br.com.nao.saia.dto.CategoryDTO;
import br.com.nao.saia.exception.CategoryNotFoundException;
import br.com.nao.saia.model.Category;
import br.com.nao.saia.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public CategoryDTO findById(UUID id) {
        return categoryRepository.findById(id)
                .map(CategoryConverter::fromDomainToDTO)
                .orElseThrow(() -> new CategoryNotFoundException(id));
    }

    public List<CategoryDTO> findAll() {
        return categoryRepository.findAll().stream()
                .map(CategoryConverter::fromDomainToDTO)
                .collect(Collectors.toList());
    }

    public void save(CategoryDTO categoryDTO) {
        Category category = CategoryConverter.fromDTOToDomain(categoryDTO);
        categoryRepository.save(category);
    }

}
